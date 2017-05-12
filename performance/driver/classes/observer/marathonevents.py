import threading
import requests
import json

from contextlib import closing

from performance.driver.core.observer import Observer
from performance.driver.core.events import Event, LogLineEvent, TeardownEvent
from performance.driver.core.utils import LRUDict

from performance.driver.classes.channel.http import HTTPResponseEndEvent

################################################################################
# MarathonEvent
################################################################################

class MarathonEvent(Event):
  pass

class MarathonStartedEvent(MarathonEvent):
  pass

################################################################################
# MarathonEvent -> MarathonAPIEvent
################################################################################

class MarathonAPIEvent(Event):
  def __init__(self, data, *args, **kwargs):
    super().__init__(*args, **kwargs)
    self.data = data

class MarathonAPIPostEvent(MarathonAPIEvent):
  pass

class MarathonStatusUpdateEvent(MarathonAPIEvent):
  pass

class MarathonFrameworkMessageEvent(MarathonAPIEvent):
  pass

class MarathonSubscribeEvent(MarathonAPIEvent):
  pass

class MarathonUnsubscribeEvent(MarathonAPIEvent):
  pass

################################################################################
# MarathonEvent -> MarathonAPIEvent -> MarathonDeploymentEvent
################################################################################

class MarathonDeploymentEvent(MarathonAPIEvent):
  def __init__(self, deployment, data, *args, **kwargs):
    super().__init__(data, *args, **kwargs)
    self.deployment = deployment

class MarathonDeploymentSuccessEvent(MarathonDeploymentEvent):
  def __init__(self, deployment, data, *args, **kwargs):
    super().__init__(deployment, data, *args, **kwargs)

class MarathonDeploymentFailedEvent(MarathonDeploymentEvent):
  def __init__(self, deployment, data, *args, **kwargs):
    super().__init__(deployment, data, *args, **kwargs)

class MarathonDeploymentStepSuccessEvent(MarathonDeploymentEvent):
  def __init__(self, deployment, data, *args, **kwargs):
    super().__init__(deployment, data, *args, **kwargs)

class MarathonDeploymentStepFailureEvent(MarathonDeploymentEvent):
  def __init__(self, deployment, data, *args, **kwargs):
    super().__init__(deployment, data, *args, **kwargs)

class MarathonDeploymentInfoEvent(MarathonDeploymentEvent):
  def __init__(self, deployment, data, *args, **kwargs):
    super().__init__(deployment, data, *args, **kwargs)

################################################################################

class MarathonEventsObserver(Observer):
  """
  This observer is responsible for extracking high-level events by observing
  the marathon event stream. Since this observer requires an active HTTP server
  from marathon, it also tracks the log events until it detects that marathon
  reached a ready state.
  """

  def __init__(self, *args, **kwargs):
    super().__init__(*args, **kwargs)
    self.url = self.getConfig('url')
    self.eventThread = None
    self.deploymentTraceIDs = LRUDict()
    self.running = True

    # Subscribe into receiving LogLine events, and place us above the
    # average priority in order to provide translated, high-level events
    # to the rest of the components that reside on order=5 (default)
    self.eventbus.subscribe(self.handleLogLineEvent, events=(LogLineEvent,), order=2)

    # When an HTTP request is completed and a marathon deployment is started,
    # we have to keep track of the traceids of the event that initiated the
    # request in order to trace it back to the source event.
    self.eventbus.subscribe(self.handleHttpResponse, events=(HTTPResponseEndEvent,), order=2)

    # Also subscribe to the teardown event in order to cleanly stop the event
    # handling thread. The order=2 here is ensuring that the `running` flag is
    # set to `False` before marathon thread is killed.
    self.eventbus.subscribe(self.handleTeardownEvent, events=(TeardownEvent,), order=2)

  def handleHttpResponse(self, event):
    """
    Look for HTTP response events that contain a `Marathon-Deployment-Id` header
    and keep track of the originating event's traceID. We keep it in order to
    attach it on further marathon events related to the given deployment
    """
    if 'Marathon-Deployment-Id' in event.headers:
      self.deploymentTraceIDs[event.headers['Marathon-Deployment-Id']] = event.traceids

  def handleLogLineEvent(self, event):
    """
    Provide translations for some well-known marathon log lines
    """
    if 'All services up and running.' in event.line:
      self.logger.info('Marathon web server started')
      self.eventbus.publish(MarathonStartedEvent())

      # Start the main event thread
      self.eventThread = threading.Thread(target=self.eventHandlerThread)
      self.eventThread.start()

  def handleTeardownEvent(self, event):
    """
    The teardown event is stopping the event handling thread
    """
    self.running = False

  def eventHandlerThread(self):
    """
    While in this thread the
    """
    while self.running:
      #
      # Process server-side events in per-line basis. The SSE protocol has the
      # following response syntax:
      #
      # event: event-name
      # data: {event json payload}
      # <empty line>
      # ...
      #
      eventName = None
      with closing(requests.get(self.url, stream=True, headers={'Accept': 'text/event-stream'})) as r:
        for chunk in r.iter_lines(decode_unicode=True, chunk_size=1):
          if chunk.startswith('event:'):
            eventName = chunk[7:]
          elif chunk.startswith('data:') and not eventName is None:
            eventData = json.loads(chunk[6:])
            self.logger.debug('Received event %s: %r' % (eventName, eventData))

            #
            # deployment_step_success
            #
            if eventName == 'deployment_step_success':
              deploymentId = eventData['plan']['id']
              self.eventbus.publish(MarathonDeploymentStepSuccessEvent(deploymentId, eventData,
                traceid=self.deploymentTraceIDs.get(deploymentId, None)))

            #
            # deployment_step_failure
            #
            elif eventName == 'deployment_step_failure':
              deploymentId = eventData['plan']['id']
              self.eventbus.publish(MarathonDeploymentStepFailureEvent(deploymentId, eventData,
                traceid=self.deploymentTraceIDs.get(deploymentId, None)))

            #
            # deployment_info
            #
            elif eventName == 'deployment_info':
              deploymentId = eventData['plan']['id']
              self.eventbus.publish(MarathonDeploymentInfoEvent(deploymentId, eventData,
                traceid=self.deploymentTraceIDs.get(deploymentId, None)))

            #
            # deployment_success
            #
            elif eventName == 'deployment_success':
              deploymentId = eventData['id']
              self.eventbus.publish(MarathonDeploymentSuccessEvent(deploymentId, eventData,
                traceid=self.deploymentTraceIDs.get(deploymentId, None)))
              if deploymentId in self.deploymentTraceIDs:
                del self.deploymentTraceIDs[deploymentId]

            #
            # deployment_failed
            #
            elif eventName == 'deployment_failed':
              deploymentId = eventData['id']
              self.eventbus.publish(MarathonDeploymentFailedEvent(deploymentId, eventData,
                traceid=self.deploymentTraceIDs.get(deploymentId, None)))
              if deploymentId in self.deploymentTraceIDs:
                del self.deploymentTraceIDs[deploymentId]

            eventName = None

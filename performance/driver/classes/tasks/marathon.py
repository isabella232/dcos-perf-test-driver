import os
import re
import requests
import threading
import json

from performance.driver.core.classes import Task
from performance.driver.core.events import ParameterUpdateEvent
from ..observer.marathonevents import MarathonDeploymentSuccessEvent, \
  MarathonDeploymentFailedEvent

# Disable SSL warnings
requests.packages.urllib3.disable_warnings()

class MarathonDeploymentMonitorTask(Task):
  """
  Base class that subscribes to the event bus and waits for a success event
  """

  def __init__(self, *args, **kwargs):
    super().__init__(*args, **kwargs)

    # Get config parameters
    config = self.getRenderedConfig()
    self.cluster_url = config.get('url', None)
    if self.cluster_url is None:
      raise ValueError('Missing `url` parameter')

    # Track delpoyments
    self.cv = threading.Condition()
    self.trackDeployments = []
    self.eventbus.subscribe(self.handleMarathonDeploymentCompletionEvent, \
      events=(MarathonDeploymentSuccessEvent,MarathonDeploymentFailedEvent))

  def getHeaders(self):
    """
    Compile and return headers
    """
    # Add auth headers if we have an dcos_auth_token defined
    headers = {}
    dcos_auth_token = self.getDefinition('dcos_auth_token', None)
    if not dcos_auth_token is None:
      headers = {
        'Authorization': 'token=%s' % dcos_auth_token
      }

    return headers

  def handleMarathonDeploymentCompletionEvent(self, event):
    """
    Keep track of completed deployments
    """
    if event.deployment in self.trackDeployments:
      with self.cv:
        self.trackDeployments.remove(event.deployment)
        self.cv.notify()

  def waitDeployments(self):
    """
    Wait for deployment ID to complete
    """
    if len(self.trackDeployments) == 0:
      return
    with self.cv:
      while len(self.trackDeployments) > 0:
        self.cv.wait()

class RemoveAllApps(MarathonDeploymentMonitorTask):
  """
  Remove matching apps from marathon
  """

  def run(self):
    self.logger.info('Removing all apps from marathon')

    # Request list of apps
    self.logger.debug('Enumerating all apps')
    response = requests.get('%s/v2/groups?embed=group.groups&embed=group.apps&embed=group.pods' % self.cluster_url, verify=False, headers=self.getHeaders())
    if response.status_code != 200:
      raise RuntimeError('Unable to enumerate running apps')

    # Destroy every service
    self.trackDeployments = []
    try:
      for app in response.json()['apps']:
        self.logger.info('Removing app %s' % app['id'])
        response = requests.delete('%s/v2/apps/%s?force=true' % (self.cluster_url, app['id']), verify=False, headers=self.getHeaders())
        if response.status_code != 200:
          self.logger.warn('Unable to remove app %s (HTTP response %i)' % (app['id'], response.status_code))
        else:
          self.trackDeployments.append(response.headers['Marathon-Deployment-Id'])

    except requests.exceptions.ConnectionError as e:
      self.logger.warn('Unable to remove app (%r)' % (e,))

    # Wait for deployments to complete
    self.waitDeployments()

class RemoveMatchingApps(MarathonDeploymentMonitorTask):
  """
  Removes matching apps from marathon
  """

  def run(self):

    # Compile matching regular expression from match directive
    config = self.getRenderedConfig()
    match = re.compile(config['match'])
    self.logger.info('Removing apps matching `%s` from marathon' % config['match'])

    # Request list of apps
    self.logger.debug('Enumerating all apps')
    response = requests.get('%s/v2/groups?embed=group.groups&embed=group.apps&embed=group.pods' % self.cluster_url, verify=False, headers=self.getHeaders())
    if response.status_code != 200:
      raise RuntimeError('Unable to enumerate running apps')

    # Destroy matching services
    self.trackDeployments = []
    try:
      for app in response.json()['apps']:
        if not match.search(app['id']):
          continue
        self.logger.info('Removing app %s' % app['id'])
        response = requests.delete('%s/v2/apps/%s?force=true' % (self.cluster_url, app['id']), verify=False, headers=self.getHeaders())
        if response.status_code != 200:
          self.logger.warn('Unable to remove app %s (HTTP response %i)' % (app['id'], response.status_code))
        else:
          self.trackDeployments.append(response.headers['Marathon-Deployment-Id'])

      # Wait for deployments to complete
      self.waitDeployments()

    except requests.exceptions.ConnectionError as e:
      self.logger.warn('Unable to remove app (%r)' % (e,))

class RemoveGroup(MarathonDeploymentMonitorTask):
  """
  Removes a specific group from marathon
  """

  def run(self):
    group_name = self.getConfig('group')
    self.logger.info('Removing group %s from marathon' % group_name)

    # Destroy group
    self.logger.debug('Removing group %s' % group_name)
    try:
      response = requests.delete('%s/v2/groups/%s/?force=true' % (self.cluster_url, group_name), verify=False, headers=self.getHeaders())
      if response.status_code != 200:
        self.logger.warn('Unable to remove group %s (HTTP response %i)' % (group_name, response.status_code))
      else:
        self.trackDeployments.append(response.headers['Marathon-Deployment-Id'])

      # Wait for deployments to complete
      self.waitDeployments()

    except requests.exceptions.ConnectionError as e:
      self.logger.warn('Unable to remove group %s (%r)' % (group_name, e))


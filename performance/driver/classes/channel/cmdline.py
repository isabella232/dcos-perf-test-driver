import fcntl
import os
import select
import shlex
import signal
import threading

from subprocess import Popen, PIPE

from performance.driver.core.events import LogLineEvent, ParameterUpdateEvent, TeardownEvent, StartEvent
from performance.driver.core.template import TemplateString, TemplateDict
from performance.driver.core.classes import Channel
from performance.driver.core.decorators import subscribesToHint, publishesHint

class CmdlineChannel(Channel):

  @subscribesToHint(ParameterUpdateEvent, TeardownEvent, StartEvent)
  def __init__(self, *args, **kwargs):
    super().__init__(*args, **kwargs)
    self.activeTask = None

    # Receive parameter updates and clean-up on teardown
    self.eventbus.subscribe(self.handleParameterUpdate, events=(ParameterUpdateEvent,))
    self.eventbus.subscribe(self.handleTeardown, events=(TeardownEvent,))
    self.eventbus.subscribe(self.handleStart, events=(StartEvent,))

    # Get some template
    self.cmdlineTpl = TemplateString(self.getConfig('cmdline'))
    self.stdinTpl = TemplateString(self.getConfig('stdin', ''))
    self.envTpl = TemplateDict(self.getConfig('env', {}))
    self.cwdTpl = TemplateString(self.getConfig('cwd', ''))

  @publishesHint(LogLineEvent)
  def monitor(self, sourceName, proc, stdin=None):
    """
    Oversees the execution of the process
    """
    lines = ['', '']

    # Make read operations non-blocking
    flag = fcntl.fcntl(proc.stdout.fileno(), fcntl.F_GETFD)
    fcntl.fcntl(proc.stdout.fileno(), fcntl.F_SETFL, flag | os.O_NONBLOCK)

    flag = fcntl.fcntl(proc.stderr.fileno(), fcntl.F_GETFD)
    fcntl.fcntl(proc.stderr.fileno(), fcntl.F_SETFL, flag | os.O_NONBLOCK)

    # Send stdin
    if stdin and not proc.stdin is None:
      proc.stdin.write(stdin)
      proc.stdin.close()

    # Wait for input in the FDs
    while True:
      if proc.poll() is None:

        # While process is running, use `select` to wait for an stdout/err
        # FD event before reading.
        (rlist, wlist, xlist) = select.select([proc.stdout, proc.stderr], [], [])
        if proc.stdout in rlist:
          block = proc.stdout.read(1024)
          lines[0] += block.decode('utf-8')
          while '\n' in lines[0]:
            (line, lines[0]) = lines[0].split('\n', 1)
            self.eventbus.publish(LogLineEvent(line, sourceName, 'stdin'))

        if proc.stderr in rlist:
          block = proc.stderr.read(1024)
          lines[1] += block.decode('utf-8')
          while '\n' in lines[1]:
            (line, lines[1]) = lines[1].split('\n', 1)
            self.eventbus.publish(LogLineEvent(line, sourceName, 'stdout'))

      else:

        # Drain buffers since after the process has exited, select might not work
        # and some remaining bytes will remain not processed.
        block = proc.stdout.read()
        if block:
          lines[0] += block.decode('utf-8')
          for line in lines[0].split('\n'):
            if line.strip():
              self.eventbus.publish(LogLineEvent(line, sourceName, 'stdin'))

        block = proc.stderr.read()
        if block:
          lines[1] += block.decode('utf-8')
          for line in lines[0].split('\n'):
            if line.strip():
              self.eventbus.publish(LogLineEvent(line, sourceName, 'stdout'))

        # Break loop
        break


  def kill(self):
    """
    Kill the currently running proc
    """
    if not self.activeTask:
      return

    # Stop process and join
    proc, thread = self.activeTask
    if proc.poll() is None:
      os.killpg(os.getpgid(proc.pid), signal.SIGTERM)
    thread.join()

    # Unset active task
    self.activeTask = None

  def launch(self, args, stdin=None, env=None, cwd=None):
    """
    Launch process with the given command-line
    """

    # Launch the process
    proc = Popen(args, stdin=PIPE, stdout=PIPE, stderr=PIPE, env=env, cwd=cwd, preexec_fn=os.setsid)

    # Launch a thread to monitor it's output
    thread = threading.Thread(target=self.monitor, args=(args[0], proc, stdin))
    thread.start()

    # Keep track of the active task
    self.activeTask = (proc, thread)

  def handleTeardown(self, event):
    """
    Kill process at teardown
    """
    if self.activeTask:
      self.logger.warn('Killing running process')
    self.kill()

  def handleStart(self, event):
    """
    Handle the start event
    """

    # If this app is instructed to launch at start, satisfy this requirement now
    atstart = self.getConfig('atstart', default='no')
    if atstart:
      self.handleParameterUpdate(ParameterUpdateEvent({}, {}, {}))

  def handleParameterUpdate(self, event):
    """
    Handle a property update
    """

    # If we have already a task running don't re-launch it unless
    # the received properties are actually updating one or more parameters
    # in our template
    if self.activeTask:
      hasChanges = False
      for key, value in event.changes.items():
        if key in self.cmdlineTpl.macros() or key in self.stdinTpl.macros() or\
           key in self.envTpl.macros() or key in self.cwdTpl.macros():
          hasChanges = True
          break
      if not hasChanges:
        return

      # We have a parameter change, kill the process
      # and schedule a new execution later
      self.kill()

    # Compose the arguments for the execution
    cwd = self.getConfig('cwd', required=False)
    cwd = self.getConfig('cwd', required=False)

    # Combine parameters with the definitions
    macroValues = self.getConfigDefinitions().fork(event.parameters)

    # Compile arguments
    cmdline = self.cmdlineTpl.apply(macroValues)
    args = shlex.split(cmdline)
    stdin = self.stdinTpl.apply(macroValues)
    env = self.envTpl.apply(macroValues)
    cwd = self.cwdTpl.apply(macroValues)

    # Reset empty arguments to `None`
    if not stdin:
      stdin = None
    if not cwd:
      cwd = None
    if not env:
      env = None

    # Launch
    self.logger.debug('Starting process: \'%s\'' % ' '.join(args))
    self.launch(args, stdin, env, cwd)


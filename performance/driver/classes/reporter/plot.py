import numpy as np
import matplotlib.pyplot as plt
import matplotlib.cm as cm

from performance.driver.core.classes import Reporter

def norm(v, vmin, vmax, tomin=0.0, tomax=1.0, wrap=True):
  if v < vmin and wrap:
    return tomin
  if v > vmax and wrap:
    return tomax
  return ((float(v) - vmin) / (vmax - vmin)) * (tomax - tomin) + tomin

class PlotGroup:

  def __init__(self, metric):
    self.name = metric.config.get('name', 'metric')
    self.title = metric.config.get('title', self.name)
    self.desc = metric.config.get('desc', None)
    self.units = metric.config.get('units', 'Unknown')
    self.valueSeries = {}

  def series(self, name):
    if not name in self.valueSeries:
      self.valueSeries[name] = []
    return self.valueSeries[name]

class PlotReporter(Reporter):

  def normalizeAxisValues(self, inputValues):
    values = {}
    for name, config in self.generalConfig.parameters.items():
      if name in inputValues:
        values[name] = float(inputValues[name])
      else:
        values[name] = float(config.get('default', 0))
    return values

  def createPlot(self):
    """
    Create a plot with common configuration
    """

    # Create a plot
    fig, ax = plt.subplots(figsize=(8.5, 6))

    # figure size, borders and padding
    # fig.subplots_adjust(left=0.12, bottom=0.08, right=0.90, top=0.90, wspace=0.25, hspace=0.40)
    # fig.set_size_inches(8.5, 6)

    return fig, ax

  def dumpPlot_1d(self, axisValues, plotGroup, filename):
    """
    Dump an 1-D plot group
    """

    # Populate axis values
    p = list(self.generalConfig.parameters.values())
    p1 = p[0]
    x1 = list(map(lambda x: float(x.get(p1['name'])), axisValues))

    # Create sub-plots
    fig, ax = self.createPlot()
    for name, values in plotGroup.valueSeries.items():
      line = ax.plot(x1, values, '-', label=name, linewidth=2)

    # Show legend
    ax.set_title("%s [%s]" % (self.generalConfig.title, plotGroup.title))
    ax.legend(loc='lower right')
    ax.set_xlabel("%s (%s)" % (p1['name'], p1.get('units', 'Unknown')))
    ax.set_ylabel("%s (%s)" % (plotGroup.name, plotGroup.units))

    # Dump
    plt.savefig(filename)

  def dumpPlot_2d(self, axisValues, plotGroup, filename):
    """
    Dump an 2-D plot group
    """

    # Populate axis values
    p = list(self.generalConfig.parameters.values())
    p1 = p[0]
    p2 = p[1]
    x1 = list(map(lambda x: float(x.get(p1['name'])), axisValues))
    x2 = list(map(lambda x: float(x.get(p2['name'])), axisValues))

    # Calculate value bounds
    v_min = None
    v_max = None
    for name, values in plotGroup.valueSeries.items():
      s_min = min(values)
      s_max = max(values)
      if v_min is None or s_min < v_min:
        v_min = s_min
      if v_max is None or s_max > v_max:
        v_max = s_max

    # Create sub-plots
    fig, ax = self.createPlot()
    i = 0
    for name, values in plotGroup.valueSeries.items():
      ax.scatter(x1, x2,
        s=list(map(lambda v: norm(v, v_min, v_max, tomax=200), values)),
        c=cm.viridis(i),
        label=name,
        alpha=1.0 / len(plotGroup.valueSeries), edgecolors='none')
      i += 1

    # Show legend
    ax.set_title("%s [%s (%s)]" % (self.generalConfig.title, plotGroup.title, plotGroup.units))
    ax.legend(loc='lower right')
    ax.set_xlabel("%s (%s)" % (p1['name'], p1.get('units', 'Unknown')))
    ax.set_ylabel("%s (%s)" % (p2['name'], p2.get('units', 'Unknown')))

    # Dump
    plt.savefig(filename)

  def dumpPlot_3d(self, axisValues, plotGroup, filename):
    """
    Dump an 3-D plot group
    """
    raise NotImplementedError('The 3-axis plot is nt yet implemented')

  def dump(self, summarizer):
    """
    Dump a plot for every metric in the time series
    """

    # Validate dimentions
    if len(self.generalConfig.parameters) == 0:
      raise ValueError('Requested to dump a plot without having any parameters')
    if len(self.generalConfig.parameters) > 3:
      raise ValueError('Requested to dump a plot with more than 3 parameters')

    # Prepare plot group
    axisValues = []
    metricPlotGroup = {}

    # Create one plot for every observed value
    for metricName, metric in self.generalConfig.metrics.items():
      metricPlotGroup[metricName] = PlotGroup(metric)

    # Process summarizer values
    for testCase in summarizer.sum():
      axisValues.append(self.normalizeAxisValues(testCase['parameters']))

      # Process summarized values into the appropriate plot group
      for metric, summarizedValues in testCase['values'].items():
        for summarizer, value in summarizedValues.items():
          metricPlotGroup[metric].series(summarizer).append(float(value))

    # Dump plots using the correct function
    dumpFunction = [self.dumpPlot_1d, self.dumpPlot_2d, self.dumpPlot_3d] \
                   [len(self.generalConfig.parameters)-1]

    # Create and dump plots
    filePrefix = self.getConfig('prefix', 'plot-')
    fileSuffix = self.getConfig('suffix', '')
    for metric, plotGroup in metricPlotGroup.items():
      dumpFunction(axisValues, plotGroup, '%s%s%s.png' % (filePrefix, metric, fileSuffix))

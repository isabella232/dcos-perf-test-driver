from performance.driver.core.classes import Reporter

class Column:
  def __init__(self, name, csvfile):
    self.csvfile = csvfile
    self.name = name
    self.rows = []

  def set(self, value):
    self.rows[self.csvfile.rows - 1] = value

class CSVFile:
  def __init__(self):
    self.cols = []
    self.rows = 0

  def col(self, name):
    for col in self.cols:
      if col.name == name:
        return col

    col = Column(name, self)
    self.cols.append(col)

    col.rows = [''] * self.rows
    return col

  def separator(self):
    self.cols.append(Column("", self))

  def addRow(self):
    for col in self.cols:
      col.rows.append("")
    self.rows += 1

  def saveTo(self, file, separator=","):
    with open(file, 'w') as f:

      # Generate header
      row = ""
      for col in self.cols:
        row += col.name + separator
      f.write("%s\n" % row)

      # Write data
      for i in range(0, self.rows):
        row = ""
        for col in self.cols:
          row += col.rows[i] + separator
        f.write("%s\n" % row)

class CSVReporter(Reporter):

  def dump(self, summarizer):
    """
    Dump summarizer values to the csv file
    """

    # Generate CSV matrix
    csv = CSVFile()
    for name, config in self.generalConfig.parameters.items():
      csv.col(name)

    # Add a blank column as separator
    csv.separator()

    # Process summarizer values
    for testCase in summarizer.sum():
      csv.addRow()

      # Populate parameter column values
      for name, config in self.generalConfig.parameters.items():
        csv.col(name).set(str(
          testCase['parameters'] \
            .get(name,
              config.get('default', 0)
            )
        ))

      # Process summarized values
      for metric, summarizedValues in testCase['values'].items():
        for summarizer, value in summarizedValues.items():
          csv.col('%s (%s)' % (metric, summarizer)).set(str(value))

    # Dump csv file
    csv.saveTo(
      self.config.get('filename', 'results.csv'),
      self.config.get('separator', ';')
    )

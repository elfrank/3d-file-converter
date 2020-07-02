const yargs = require('yargs');

// examples at https://markoskon.com/yargs-examples/
yargs.usage('Usage: $0 [options]');

yargs.option('f', {
  alias: 'fileFormat',
  describe: 'File Format',
  type: 'string',
  default: 'obj',
  nargs: 1,
});

yargs.option('o', {
  alias: 'outputFile',
  describe: 'Output file',
  type: 'string',
  required: true,
  nargs: 1,
});

yargs
  .help('h')
  .alias('h', 'help')
  .describe('h', 'Show help');

module.exports = {
  yargs,
};

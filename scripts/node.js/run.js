const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { argv } = require('./utils/args').yargs;

const BASE_DIR = '/usr/src/app';

(async () => {
  const scriptName = 'export.js';
  const {
    outputFile,
    inputFile,
  } = argv;

  const scriptPath = `${BASE_DIR}/scripts/node.js/${scriptName} `;

  try {
    const cmd = [
      'docker exec -i app',
      `node ${scriptPath}`,
      `-i ${inputFile}`,
      `-o ${outputFile}`,
    ].join(' ');

    const {
      stdout,
      stderr,
    } = await exec(cmd);

    if (stdout) {
      console.log('stdout:', stdout);
    }

    if (stderr) {
      console.log('stderr:', stderr);
    }
  } catch (err) {
    console.error(err);
  }
})();

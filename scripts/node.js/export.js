const util = require('util');
const path = require('path');

const exec = util.promisify(require('child_process').exec);
const { argv } = require('./utils/args').yargs;

const BASE_DIR = '/usr/src/app';
const BLENDER_SCRIPTS_DIR = `${BASE_DIR}/scripts/blender`;
const SCRIPT_NAME = `export`;

async function runPipeline(pipelineSteps = []) {
  for await (const stepCommand of pipelineSteps) {
    console.log(`Executing "${stepCommand}"`);
    const { stdout, stderr } = await exec(stepCommand);

    if (stdout) {
      console.log('stdout:', stdout);
    }

    if (stderr) {
      console.log('stderr:', stderr);
    }
  }
}

(async () => {
  try {
    const {
      inputFile,
      outputFile,
    } = argv;

    const outputFilePath = `${outputFile}`;
    const outputFileFormat = path.extname(outputFilePath).replace('.', '');
    const inputFilePath = `${inputFile}`;
    const inputFileFormat = 'obj';

    const exportPipelineCmd = [
      // environment variables to pass to the python script
      `OUTPUT_FILE_PATH=${outputFilePath}`,
      `OUTPUT_FILE_FORMAT=${outputFileFormat}`,
      `INPUT_FILE_PATH=${inputFilePath}`,
      `INPUT_FILE_FORMAT=${inputFileFormat}`,
      // call blender
      'blender',
      // blender cli parameters
      '--background', // run headless
      '-noaudio',
      `-P ${BLENDER_SCRIPTS_DIR}/${SCRIPT_NAME}.py`,
    ].join(' ');

    const exportPipeline = [exportPipelineCmd];
    await runPipeline(exportPipeline);
  } catch (err) {
    console.error(err);
  }
})();

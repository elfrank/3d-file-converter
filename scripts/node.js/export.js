const path = require('path');
const util = require('util');
const fs = require('fs');

const exec = util.promisify(require('child_process').exec);
const { argv } = require('./utils/args').yargs;

const BASE_DIR = '/usr/src/app';
const BLENDER_SCRIPTS_DIR = `${BASE_DIR}/scripts/blender`;
const OUTPUT_PATH = `${BASE_DIR}/output`;

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
      fileFormat,
      outputFile,
    } = argv;

    const scriptName = `export_to_${fileFormat}`;
    const destFilePath = `${OUTPUT_PATH}/${outputFile}`;

    const exportToFbxCmd = [
      // environment variables to pass to the python script
      `OUTPUT_FILE=${destFilePath}`,
      // call blender
      'blender',
      // blender cli parameters
      '--background', // run headless
      '-noaudio',
      `-P ${BLENDER_SCRIPTS_DIR}/${scriptName}.py`,
    ].join(' ');

    const fbxPipeline = [exportToFbxCmd];
    await runPipeline(fbxPipeline);

  } catch (err) {
    console.error(err);
  }
})();

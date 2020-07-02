# 3D File Exporter
A 3D File Exporter Powered by Blender.

[![Maintainability](https://api.codeclimate.com/v1/badges/91756ad255e7c1b0ce62/maintainability)](https://codeclimate.com/github/elfrank/3d-file-exporter/maintainability) | [![Test Coverage](https://api.codeclimate.com/v1/badges/91756ad255e7c1b0ce62/test_coverage)](https://codeclimate.com/github/elfrank/3d-file-exporter/test_coverage)

## Setup

### Pre-requisites
1. [Install Docker](https://docs.docker.com/get-docker/).
2. Clone the repo locally.

### Build the Docker Image

```bash
scripts/docker-build.sh
```

## Run it locally

### Start Container

```bash
scripts/docker-start.sh
```

### Run the Scripts

```bash
# usage
node scripts/node.js/run.js -h

# export obj
node scripts/node.js/run.js -o myfile.obj -f obj

# export fbx
node scripts/node.js/run.js -o myfile.fbx -f fbx
```

### Formats supported
* OBJ + MTL
* FBX

### TODO
* Load 3D Model from Path
* Support Conversation from file type A to file type B

## Resources
* [Blender - Export Scene Operators](https://docs.blender.org/api/current/bpy.ops.export_scene.html)
* [Blender - Import and Export Models](https://blender.stackexchange.com/questions/16563/how-can-i-run-blender-from-the-command-line-to-export-and-import-models)
* [Blender - CLI Arguments](https://docs.blender.org/manual/en/latest/advanced/command_line/arguments.html)

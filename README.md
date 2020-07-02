# 3D File Exporter
A 3D File Exporter Powered by Blender.

## Setup
1. [Install Docker](https://docs.docker.com/get-docker/).
2. Clone the repo locally.

## Build the Docker Image

```bash
scripts/docker-build.sh
```

## Start Container

```bash
scripts/docker-start.sh
```

## Run the Pipeline

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

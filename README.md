# 3D File Exporter
A 3D File Exporter Powered by Blender.

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

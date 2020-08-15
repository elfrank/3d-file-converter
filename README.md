3d-file-converter
========

[![Maintainability](https://api.codeclimate.com/v1/badges/f9b6d6c2e5d74d5a425c/maintainability)](https://codeclimate.com/github/elfrank/3d-file-converter/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f9b6d6c2e5d74d5a425c/test_coverage)](https://codeclimate.com/github/elfrank/3d-file-converter/test_coverage)

A CLI-based 3D File Exporter and Converter powered by Blender.


### Setup

```bash
# install Docker: https://docs.docker.com/get-docker/

# clone Repo
git clone git@github.com:elfrank/3d-file-converter.git

# generate .env file
touch .env && echo "DOCKER_IMAGE_NAME=3d-file-converter" >> .env

# install dependencies
nvm use
npm install

# build the docker image
scripts/docker-build.sh
```

### Usage

#### Start the Container

```bash
scripts/docker-start.sh
```

#### Run the Scripts

```bash
# usage
node scripts/node.js/run.js -h

# convert from obj to fbx
node scripts/node.js/run.js -i data/fixtures/teapot/teapot.obj -o data/output/teapot.fbx

# convert from fbx to obj
node scripts/node.js/run.js -i data/fixtures/teapot/teapot.fbx -o data/output/teapot.obj
```

#### Formats supported
* Input formats: obj, fbx, gltf
* Output formats: obj, fbx, gltf, glb, dxf

## Notes
* It probably makes sense to use a python script as the entrypoint instead of a node.js script (future work?).

## Resources
* [Blender - Export Scene Operators](https://docs.blender.org/api/current/bpy.ops.export_scene.html)
* [Blender - Import and Export Models](https://blender.stackexchange.com/questions/16563/how-can-i-run-blender-from-the-command-line-to-export-and-import-models)
* [Blender - CLI Arguments](https://docs.blender.org/manual/en/latest/advanced/command_line/arguments.html)

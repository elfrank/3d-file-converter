#!/bin/bash

# scripts/build: Build the Docker image.

cd "$(dirname "$0")/.." > /dev/null

set -e

source scripts/_docker-helpers.sh

build_image

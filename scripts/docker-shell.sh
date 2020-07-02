#!/bin/bash

# scripts/shell: Launch a shell in the context of the application.

cd "$(dirname "$0")/.." > /dev/null

set -e

source scripts/_docker-helpers.sh

docker-compose run app /bin/sh

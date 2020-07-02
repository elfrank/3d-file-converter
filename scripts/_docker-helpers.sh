#!/bin/bash

# Load env vars for .env
export $(grep -v '^#' .env | xargs -0) > /dev/null

build_image() {

  # Assign docker image from .env, or default to 'app'
  DOCKER_IMAGE_NAME="${DOCKER_IMAGE_NAME:-app}"

  echo "=== Building image '$DOCKER_IMAGE_NAME' ==="

  # Build the image
  docker build \
   -t $DOCKER_IMAGE_NAME . \
   --no-cache
}

remove_all_containers() {
  echo "=== Removing all containers ==="
  stop_all_services
  docker-compose down
}

stop_all_services() {
  echo "=== Stopping all services ==="
  docker-compose stop
}

run_all_services() {
  docker-compose up -d
}

start_all_services() {
  # remove running containers
  remove_all_containers

  echo "=== Starting all services ==="

  # run new container
  run_all_services
}

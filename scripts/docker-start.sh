#!/bin/bash

# scripts/start: Start all services.

cd "$(dirname "$0")/.." > /dev/null

set -e

source scripts/_docker-helpers.sh

start_all_services

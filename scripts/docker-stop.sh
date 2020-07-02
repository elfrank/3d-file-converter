#!/bin/bash

# scripts/stop: Stop all services.

cd "$(dirname "$0")/.." > /dev/null

set -e

source scripts/_docker-helpers.sh

stop_all_services

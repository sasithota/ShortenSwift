#!/bin/bash

opt="$1"

if [ "$opt" = "start" ]; then
    docker compose up -d
    exit 0
fi

if [ "$opt" = "stop" ]; then
    docker compose down
    docker rmi $(docker images -q)
    exit 0
fi

echo "Invalid option: $opt"
echo "Usage: $0 start / stop"
exit 1
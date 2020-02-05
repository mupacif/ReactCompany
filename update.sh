#!/usr/bin/env bash

cd ~/ReactCompany
git pull
docker stack deploy -c Docker-compose.yml test
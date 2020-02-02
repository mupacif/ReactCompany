#!/usr/bin/env bash

cd ~/ReactCompany
git fetch origin master
cd ~/server
npm install #npm module that doesnt want to install :/
cd ..
docker stack deploy -c Docker-compose.yml test
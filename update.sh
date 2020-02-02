#!/usr/bin/env bash

cd ~/ReactCompany
git fetch origin master
whoami
docker stack deploy -c Docker-compose.yml TEST
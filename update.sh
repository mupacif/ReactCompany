#!/usr/bin/env bash

cd ~/ReactCompany
git fetch origin master
sudo docker stack deploy -c Docker-compose.yml TEST
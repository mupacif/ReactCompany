# ReactComp

## Overview
This is the backbone of a TriollonDollars projects that will change humanity

[![Build Status](https://dev.azure.com/mupacif0344/ReactComp/_apis/build/status/mupacif.ReactCompany%20(1)?branchName=master)](https://dev.azure.com/mupacif0344/ReactComp/_build/latest?definitionId=4&branchName=master)


## links 

http://tests.pacee.net/graphql 

http://tests.pacee.net/adminer

http://tests.pacee.net:9090 (phpmyadmin)

https://eu-west-1.console.aws.amazon.com/cloud9/ide/522acf5b50d74d20a9d7003dad43a110  (Server Online Editor)


## useful commands for server (check if all 5 of them are running)

docker ps (to see all running containers)  
docker exec -it idContainer sh (go inside running container)

docker service ls (list of all services/containers)  
docker service logs idService (logs of service)


docker stack deploy -c Docker-compose.yml test (update all service after a change)  
docker stact rm test (delete all services)
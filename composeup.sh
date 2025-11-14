#!/bin/bash
#docker build -f Dockerfile  -t km-kob-frontend-1 .

docker login habor.rvvcs.com/revelsoft -u readonly -p tRwu9K95z2kE

docker pull habor.rvvcs.com/revelsoft/auth-km-kob-frontend:v1.01

docker-compose  up -d
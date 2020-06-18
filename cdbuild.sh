#!/bin/bash
sudo docker pull registry.cn-shanghai.aliyuncs.com/lyg_leran_docker/lyg_cd:latest
docker-compose down
docker-compose up -d



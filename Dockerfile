FROM node:8-stretch

RUN npm install -g npm && npm install && npm install -g vue-cli

WORKDIR /app
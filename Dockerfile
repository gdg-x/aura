FROM node:8-stretch

WORKDIR /app
COPY package.json  /app
COPY package-lock.json /app

RUN npm install -g npm && npm install && npm install -g vue-cli


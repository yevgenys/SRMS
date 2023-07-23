FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY fe .

EXPOSE 3000

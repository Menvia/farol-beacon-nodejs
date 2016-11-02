# Parent Dockerfile https://github.com/nodejs/docker-node/blob/dc9ceb77ad6d98258c825ee45aac219169bc3532/6.2/Dockerfile
FROM node:6.2

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install

CMD [ "npm", "start" ]
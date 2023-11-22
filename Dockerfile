FROM node

WORKDIR /usr/src/app

RUN mkdir /src

RUN npm install -y -g nodemon && npm install -y express

ENTRYPOINT ["nodemon", "src/index.js"]


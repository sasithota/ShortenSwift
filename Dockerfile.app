FROM node

WORKDIR /usr/src/app

COPY package.json ./

RUN mkdir /src

RUN npm install 

ENTRYPOINT ["npx", "nodemon", "src/index.js"]


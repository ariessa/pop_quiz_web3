FROM node:18-alpine

WORKDIR /usr/src/app

COPY ./package*.json /usr/src/app/

RUN npm install

COPY ./question_3 /usr/src/app/

EXPOSE 3001

CMD ["node", "question_3/server.js"]

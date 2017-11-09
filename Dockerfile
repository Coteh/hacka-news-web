FROM node:latest

WORKDIR /usr/src/hacka-news-web

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm","start"]

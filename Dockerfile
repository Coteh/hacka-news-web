FROM node:16.13.0

WORKDIR /usr/src/hacka-news-web

COPY . .

RUN yarn install

EXPOSE 3000
CMD ["yarn","start"]

FROM node:12-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY ["app/package.json", "app/package-lock.json*", "./"]

RUN npm install --production

COPY app/index.js index.js

CMD ["node", "index.js"]
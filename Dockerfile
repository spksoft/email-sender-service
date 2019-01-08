FROM node:8.12.0-alpine

RUN apk update && \
    apk upgrade && \
    apk add git && \
    apk add python

WORKDIR /opt/app
COPY package.json package-lock.json* ./
RUN npm install

COPY . /opt/app
RUN npm run build

ENV PORT 80
EXPOSE 80

CMD ["node", "build/index.js"]
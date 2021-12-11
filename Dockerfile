FROM node:latest
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm i
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
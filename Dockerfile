FROM node:16-alpine
RUN apk add --no-cache npm
WORKDIR /app
COPY . /app/
EXPOSE 3000
RUN npm install  
RUN npm i -D jest ts-jest @types/jest
RUN npm install jest --global
CMD jest && npm start

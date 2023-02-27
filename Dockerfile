FROM node:18-buster-slim
COPY package*.json /app/
WORKDIR /app
RUN npm install
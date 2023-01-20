FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@9.3.1
COPY . .
EXPOSE 8080
CMD ["npm", "start"]
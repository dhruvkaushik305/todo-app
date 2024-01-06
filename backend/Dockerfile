FROM node:20.10.0-alpine3.19
WORKDIR /todo-app-backend
COPY . /todo-app-backend/
RUN npm install
EXPOSE 3000
CMD [ "npm","run","start" ]
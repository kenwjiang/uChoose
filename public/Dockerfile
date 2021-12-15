FROM node:14.18-slim as build

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . .

RUN npm run-script build

FROM nginx:stable
COPY --from=build /app/dist/public /usr/share/nginx/html

EXPOSE 80
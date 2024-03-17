FROM node:16.16.0-alpine3.15 as node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.21-alpine

COPY --from=node /usr/src/app/dist/master-vuelos-frontend /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]'
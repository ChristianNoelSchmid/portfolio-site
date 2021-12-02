#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli
RUN npm install
RUN ng build --outputPath=dist --baseHref=/

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/ /usr/share/nginx/html
# FROM nginx:1.17.7
FROM firesh/nginx-lua:latest

COPY nginx/default.conf /etc/nginx/conf.d/

RUN mkdir -p /etc/nginx/ssl
COPY ssl/server.crt /etc/nginx/ssl/
COPY ssl/server.key /etc/nginx/ssl/
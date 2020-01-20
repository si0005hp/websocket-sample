FROM nginx:1.17.7

COPY default.conf /etc/nginx/conf.d/
COPY sample.html /usr/share/nginx/html/

RUN mkdir -p /etc/ssl
COPY ssl/server.crt /etc/ssl/
COPY ssl/server.key /etc/ssl/
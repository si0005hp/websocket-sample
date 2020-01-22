FROM node:lts

RUN apt-get update -y \
  && mkdir -p /var/cache/apt/archives \
  && apt-get -y install \
  net-tools netcat tcpdump \
  && rm -rf /var/lib/apt/lists/* /var/cache/apt/*

WORKDIR /app
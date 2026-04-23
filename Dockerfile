FROM nginx:1.27-alpine

RUN apk add --no-cache bash gettext

WORKDIR /app

COPY . /usr/share/nginx/html
COPY deploy/docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY deploy/docker/docker-entrypoint.sh /docker-entrypoint.d/40-generate-runtime-config.sh

RUN chmod +x /docker-entrypoint.d/40-generate-runtime-config.sh

EXPOSE 80

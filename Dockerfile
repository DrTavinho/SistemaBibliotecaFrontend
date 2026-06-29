FROM nginx:alpine

COPY INDEX.HTML /usr/share/nginx/html/index.html

EXPOSE 80
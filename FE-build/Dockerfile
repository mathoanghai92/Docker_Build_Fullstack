FROM docker.io/nginxinc/nginx-unprivileged:latest
ENV TZ=Asia/Ho_Chi_Minh
USER root
COPY nginx.conf /etc/nginx/nginx.conf
COPY build /usr/share/nginx/html
RUN apt remove libldap-2.5-0 libde265-0 libaom3 -y 
USER nginx

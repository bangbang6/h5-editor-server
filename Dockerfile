# Dockerfile
FROM node:14
WORKDIR /app
COPY . /app

# 设置时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone
RUN npm config set registry https://registry.npmmirror.com
RUN npm install
RUN npm install pm2 -g


# 宿主机 ip 指向 docker-host ，以方便 docker 内部访问宿主机
CMD '10.0.24.1' >> /etc/hosts && npm i && npm run prd-dev && npx pm2 log

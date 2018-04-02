FROM smebberson/alpine-nginx-nodejs
MAINTAINER Ed Asriyan <ed-asriyan@protonmail.com>

WORKDIR /application

# install dependencies
ADD package.json .
ADD package-lock.json .
RUN npm install

# build the app
ADD public  /usr/html/
ADD src ./src
RUN npm run build

# copy generated files
RUN cp -R dist/. /usr/html/

# remove unnecessary source files
RUN rm -fr /application

# use own nginx config
RUN cp nginx.conf /etc/nginx/nginx.conf

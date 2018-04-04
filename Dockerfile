FROM igorilic/nginx-nodejslts-alpine

WORKDIR /application

# install dependencies
ADD package.json .
ADD package-lock.json .
RUN npm install

# build the app
ADD public  /usr/html/
ADD src ./src
ADD webpack.config.js .
ADD .babelrc .
ADD nginx.conf .
RUN npm run build

# copy generated files
RUN cp -R dist/. /usr/html/

# use own nginx config
RUN cp -f nginx.conf /etc/nginx/nginx.conf

# remove unnecessary source files
RUN rm -fr /application

EXPOSE 80
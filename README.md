# VisitPage for Hackaton Best
The working site is here: https://visit-host

This is single page application (SPA). For create this app, we are use Redux and React.

Using Webpack, we collect one index.html file that loads the bundle.js script. It contains both js code and styles for the pages. If you want to know the details, examine the code.

The src folder contains all executable code.

The [style](https://github.com/Pacman29/visitPage/tree/master/src/styles) folder contains all the styles.

## Running the app
At first clone the repository:
```bash
$ git clone git@github.com:Pacman29/visitPage.git && cd visitPage
```

Now you can build and run the app, there are several ways to do it:

### Using docker
1. Build the docker image:
```bash
$ docker build -t visitpage .
```

2. Run a container (replace `<PORT>` with port you want to listen):
```bash
$ docker run -p <PORT>:80 visitpage
```

Open `http://localhost:<PORT>` in the browser.

### Using npm & node.js
1. It requires [Node.js](https://nodejs.org/) with npm. Install them.

2. Install dependencies:
```bash
$ npm install
```

3. Run the server :
```bash
$ npm start
```
And open `http://localhost:<PORT>` in the browser.


### Using a server
1. It requires [Node.js](https://nodejs.org/) with npm. Install them.

2. Install dependencies:
```bash
$ npm install
```

3. Generate bundle:
```bash
$ npm run build
```

Generated files are located in `dist/` directory. For it to work
properly, you should use them and `public/` as static files on your
server. Do it manually, or do the following to run with nginx:

4. Install [nginx](https://nginx.org).

5. Copy generated files:
```bash
cp -R dist/. /usr/html/
```

6. Copy static files:
```bash
cp -R public/. /usr/html/
```

6. Copy nginx config:
```bash
cp nginx.conf /etc/nginx/nginx.conf
```

7. Restart nginx:
```bash
sudo service nginx restart
```

Open `http://localhost` in the browser
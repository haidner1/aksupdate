'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.set('view engine', 'pug');

app.set('views', './views');

app.get('/', function (req, res) {
  res.render('./index.pug', { title: 'Kubernetes', message: 'Kubernetes Demo'});
});

app.get('/api2', (req, res) => {
  res.send('<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Error</title>\n</head>\n<body>\n<pre>\nThis is the API2</pre>\n</body>\n</html>');
});

app.get('/api', (req, res) => {
  res.send('<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>Error</title>\n</head>\n<body>\n<pre>\nThis is the API</pre>\n</body>\n</html>');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
'use strict';
var path = require('path');
var express = require('express');

var port = process.env.PORT || 3000;
var app = express();

app.use('/', express.static(path.join(__dirname, "/dist")));

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

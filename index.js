'use strict';

require('babel-core/register')({});
require('babel-polyfill');

var server = require('./server.js').default;

var port = process.env.PORT || 3000;

server.listen(port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

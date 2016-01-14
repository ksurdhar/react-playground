'use strict';

var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackMiddleware = require('webpack-dev-middleware');
var config = require('./webpack.config.js');

var port = process.env.PORT || 3000;
var app = express();

console.log(process.env.NODE_ENV);

if(process.env.NODE_ENV === 'development'){
  console.log('we should be hotloading');
  var compiler = webpack(config);
  var middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
}

app.use('/', express.static(__dirname));

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

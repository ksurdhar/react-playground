'use strict';

var path = require('path');
var webpack = require('webpack');

var commonLoaders = [
  {
    test: /\.js?$/,
    exclude: /node_modules/,
    loaders: ['react-hot', 'babel-loader']
  }, {
    test: /\.html$/,
    loader: "file?name=[name].[ext]"
  }
];

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: "./client/index.js"
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: commonLoaders
  }
}

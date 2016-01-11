'use strict';

var path = require('path');
var webpack = require('webpack');

var commonLoaders = [{
  test: /\.js?$/,
  exclude: /node_modules/,
  loaders: ['babel']
}];

module.exports = [
  {
    devtool: 'eval-source-map',
    entry: [
      'webpack-hot-middleware/client?reload=true',
      path.join(__dirname, './client')
    ],
    output: {
      path: path.join(__dirname, '/dist/'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ],
    module: {
      loaders: commonLoaders
    }
  },
  {
    name: "server-side rendering",
    entry: {
      app: "./server"
    },
    output: {
      path: path.join(__dirname, '/dist/'),
      filename: 'server-bundle.js',
      publicPath: '/'
    },
    module: {
      loaders: commonLoaders
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ]
  }
]

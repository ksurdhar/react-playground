var path = require('path');

module.exports = {
  entry: [
    './client/index.js'
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'shared'],
    extensions:         ['', '.js']
  },
  output: {
    path:       path.join(__dirname, 'dist'),
    filename:   'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test:    /\.js?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  }
}

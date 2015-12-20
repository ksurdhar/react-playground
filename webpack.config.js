module.exports = {
  entry: ['./app.js'],
  output: {
    filename: 'bundle.js',
    path: 'dist'
  },
  module: {
    loaders: [
      { test: [/\.js$/, /\.es6$/], exclude: /node_modules/, loader: 'babel-loader' },
      { test: [/\.css$/], loader: 'css' },
      { test: [/\.scss$/],loaders: ['style', 'sass'] }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  },
  watch: true
}

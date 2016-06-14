var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
  entry: './src/index.jsx',
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/dist/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.less']
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        text: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['es2015', 'react'] }
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: 'style!css!less'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}

module.exports = config

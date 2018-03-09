/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  devtool: "eval",
  module: {
    rules: [
      {
        exclude: /node_modules|packages/,
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.styl/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "stylus-loader"
        }]
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Calculator',
    template: 'src/index.html'
  }), new webpack.NamedModulesPlugin()],
}

// from the html plugin docs...
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var path = require("path");

module.exports = {
  // This mirrors the webpack watch terminal command
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      // test for any .css files
      {test: /\.scss$/, use: ['style-loader','css-loader', 'sass-loader']}
    ]
  },
    plugins: [new HtmlWebpackPlugin()]
};

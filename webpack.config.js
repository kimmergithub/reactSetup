// from the html plugin docs...
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

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
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader?url=false",
          publicPath: "/dist"
        })
      },

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    stats: "errors-only",
    open: true
  },
    plugins: [
      new HtmlWebpackPlugin({
            title: 'template',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            template: './src/index.ejs',
          }),
      new ExtractTextPlugin({
        filename: "app.css",
        disable: false,
        allChunks: true
      })
    ]
};

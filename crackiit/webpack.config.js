var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: ['babel-polyfill','./src/index.js','react-hot-loader/patch','webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    ],
  target: 'node',
  module: {
   loaders: [
     { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
     { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
   ]
 },
  externals: nodeModules,
  plugins: [
    new webpack.IgnorePlugin(/\.(css|less)$/),
    new webpack.BannerPlugin({banner:'require("source-map-support").install();',
                              raw: true, entryOnly: false }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'sourcemap',
  devServer : {
    historyApiFallback : true
  }
}

const path = require('path');
const merge = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.js');
let __di2root = path.resolve(__dirname, '../');
let __dirout = path.resolve(__di2root, './dist');

let config = {
  mode: 'development',
  entry: path.resolve(__dirout, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirout, './src/'),
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirout, './index.html'),
      filename: 'index.html'
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirout, './src/'),
    compress: true,
    port: 8000,
    // 自动打开浏览器
    open: false
  },
};
module.exports = merge(baseConfig, config);

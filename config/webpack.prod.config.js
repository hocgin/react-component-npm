const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
let __di2root = path.resolve(__dirname, '../');

let config = {
  mode: 'production',
  entry: path.resolve(__di2root, './src/index.js'),
  output: {
    path: path.resolve(__di2root, './lib/'),
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      root: "React",
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
    }
  }
};
module.exports = merge(baseConfig, config);

const path = require('path');
let __di2root = path.resolve(__dirname, '../');

module.exports = {
  output: {
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      use: 'babel-loader',
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.less$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",
        options: {
          sourceMap: true,
          modules: {
            localIdentName: "[local]-[hash:5]"
          },
        }
      }, {
        loader: "less-loader"
      }],
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: {
        loader: 'url-loader'
      }
    }],
  },
  resolve: {
    alias: {
      'react': path.resolve(__di2root, './node_modules/react'),
      'react-dom': path.resolve(__di2root, './node_modules/react-dom'),
    }
  },
};

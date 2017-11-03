const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

function configure () {
  return {
    entry: `${__dirname}/src/index.js`,
    output: {
      path: `${__dirname}/build`,
      filename: `bundle.js`
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react']
            }
          }
        }
      ]
    },
    plugins: [ new HTMLWebpackPlugin()]
  }
}

module.exports = configure

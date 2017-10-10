const path = require('path');

function configure () {
  return {
    entry: `${__dirname}/src/index.js`,
    output: {
      filename: `build/bundle.js`
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
    }
  }
}

module.exports = configure

const path = require('path')

function configure (env) {

  return {
    entry: `${__dirname}/src/index.js`,
    output: {
      filename: `build/bundle.js`
    }
  }
}

module.exports = configure

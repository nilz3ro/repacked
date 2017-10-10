const path = require('path')

function configure (env) {
  console.log('path', path);

  return {
    entrypoint: 'src/index.js'
  }
}

module.exports = configure;

const Serve = require('serve');
const defaultPort = 8080
const port = process.env['PORT'];

const server = Serve('build', {
  port: port || defaultPort,
  ignore: ['node_modules']
});

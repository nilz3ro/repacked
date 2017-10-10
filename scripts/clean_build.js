const chalk = require('chalk');
const rm = require('rimraf');
const build_dir = process.env.BUILD_DIR;

rm(build_dir, function () {
  console.log('|');
  console.log(`| ${embolden("Deleted:")} ${engreen(build_dir)}`);
  console.log('|');
});

function embolden (string) {
  return chalk.bold(string);
}

function engreen (string) {
  return chalk.green(string);
}

const chalk = require('chalk');
const rm = require('rimraf');
const build_dir = process.env.BUILD_DIR;

rm(build_dir, function () {
  console.log(`> ${chalk.bold("Deleted:")} ${chalk.green(build_dir)}\n`);
});

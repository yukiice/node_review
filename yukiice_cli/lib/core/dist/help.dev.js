"use strict";

var program = require('commander');

var helpOptions = function helpOptions() {
  // 增加自己的options
  program.option('-y -yukiice', 'a yukiice cli');
  program.option('-d --dest <dest>', 'a destination folder,例如 -d /src/components');
  program.option('-f --framework <framework>', 'your framework'); // 其他

  program.on('--help', function () {
    console.log(' ');
    console.log('Other:');
    console.log(' other options');
  });
};

module.exports = {
  helpOptions: helpOptions
};
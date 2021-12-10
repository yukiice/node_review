"use strict";

var program = require('commander'); // 导入action


var _require = require('./actions'),
    createProjectAction = _require.createProjectAction;

var createCommands = function createCommands() {
    program.command('create <project> [others...]').description('clone a repository into a folder').action(createProjectAction);
};

module.exports = {
    createCommands: createCommands
};
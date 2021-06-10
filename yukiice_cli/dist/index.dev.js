#!/usr/bin/env node
"use strict";

var program = require('commander');

var _require = require('./lib/core/help'),
    helpOptions = _require.helpOptions;

var _require2 = require('./lib/core/create'),
    createCommands = _require2.createCommands;

program.version(require("./package.json").version);
helpOptions();
createCommands();
program.parse(process.argv);
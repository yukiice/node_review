"use strict";

// 把callback转换成promise模式
var _require = require('util'),
    promisify = _require.promisify;

var download = promisify(require('download-git-repo'));

var _require2 = require('../../config/repo-config'),
    vueRepo = _require2.vueRepo;

var createProjectAction = function createProjectAction(project) {
  return regeneratorRuntime.async(function createProjectAction$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(download(vueRepo, project, {
            clone: true
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = {
  createProjectAction: createProjectAction
};
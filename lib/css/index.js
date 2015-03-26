var Utils = require('uo-node-utils');

module.exports = function (template, canCompile) {
  if (!canCompile)
    return;

  this.content = [];
  this.template = Utils.read.file(template);

  this.compile = require('./compile.js');
  this.build = require('./build.js');
  this.cacheBusting = require('./cache-busting.js');
};

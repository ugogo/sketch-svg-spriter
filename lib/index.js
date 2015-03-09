var _ = require('underscore');
var Utils = require('uo-node-utils');

global.Wrapper = require('./tools/wrapper');
global.SvgManager = require('./managers/svg');


Utils.extend({
  name: 'extract',
  content: require('./utils/extract')
});

Utils.extend({
  name: 'formatPath',
  content: function (path) {
    return path.charAt(path.length - 1) !== '/' ? path + '/' : path;
  }
});

Utils.extend({
  name: 'regexs',
  content: {
    SvgHasX: /(<svg)(.*)(x=")(\d*)(")/,
    x: /((x=")(\d*)("))/
  }
});



module.exports = function (userOpts) {
  this.opts = _.extend(require('./options/defaults'), userOpts);
  this.testOpts = require('./options/test');

  this.generate = require('./generate');
  this.exportSvg = require('./tools/export-svg');

  this.testOpts();

  if (!this.opts.canContinue)
    return;

  this.opts.assets = this.opts.file.dist + 'icons_single/';
};

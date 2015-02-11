var extend = require('extend');

global.Utils = require('uo-node-utils');
global.Wrapper = require('./wrapper');

Utils._extend({
  name: 'extract',
  content: require('./utils/extract')
});

module.exports = function (userOpts) {
  this.opts = extend(true, require('./options/defaults'), userOpts);

  this.generate = require('./generate');
  this.buildSprite = require('./build-sprite');
  this.exportSvg = require('./tools/export-svg');
  this.cleanSvg = require('./tools/clean-svg');
  this.updateSvgX = require('./tools/update-svg-x');
};

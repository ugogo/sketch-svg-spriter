var exec = require('child_process').exec;
var Utils = require('uo-node-utils');

global.u = new Utils();
global.Wrapper = require('./wrapper/wrapper');

module.exports = Spriter = {
  generate: require('./generate'),
  exportSlices: require('./utils/export-slices'),
  buildSprite: require('./build-sprite'),
  wrapper: require('./wrapper/wrapper.js'),
  cleanSVG: require('./utils/clean-svg')
};

var exec = require('child_process').exec;
var Utils = require('uo-node-utils');

global.u = new Utils();
global.Wrapper = require('./wrapper/wrapper');

u.addFunc({
  name: 'SVG_updatePositions',
  content: require('./utils/svg-update-positions')
});

u.addFunc({
  name: 'SVG_getSizes',
  content: require('./utils/svg-get-sizes')
});

module.exports = Spriter = {
  generate: require('./generate'),
  exportSlices: require('./utils/export-slices'),
  buildSprite: require('./build-sprite'),
  cleanSVG: require('./utils/svg-clean')
};

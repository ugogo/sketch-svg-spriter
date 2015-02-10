var exec = require('child_process').exec;

global.Utils = require('uo-node-utils');
global.Wrapper = require('./wrapper/wrapper');

Utils._extend({
  name: 'SVG_updatePositions',
  content: require('./utils/svg-update-positions')
});

Utils._extend({
  name: 'SVG_getSizes',
  content: require('./utils/svg-get-sizes')
});

Spriter = {
  generate: require('./generate'),
  exportSlices: require('./utils/export-slices'),
  buildSprite: require('./build-sprite'),
  cleanSVG: require('./utils/svg-clean')
};

module.exports = Spriter;

var Utils = require('uo-node-utils');
var svg2png = require('svg2png');

module.exports = function (svgFile, cb) {
  var pngFile = svgFile.replace('.svg', '.png');

  return svg2png(svgFile, pngFile, cb);
};

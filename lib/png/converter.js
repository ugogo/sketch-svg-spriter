var Utils = require('uo-node-utils');
var svg2png = require('svg2png');

module.exports = function (svgFile) {
  var pngFile = svgFile.replace('.svg', '.png');

  return svg2png(svgFile, pngFile, function (err) {
    if (err) throw err;
    return Utils.log('✓ .png sprite generated');
  });
}

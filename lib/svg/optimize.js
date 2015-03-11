var SVGO = require('svgo');
var SvgO = new SVGO();

module.exports = function (content, cb) {
  SvgO.optimize(content, cb);
};

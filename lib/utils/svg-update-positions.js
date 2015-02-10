var regexs = {
  hasX: /(<svg)(.*)(x=")(\d*)(")/,
  x: /((x=")(\d*)("))/
};

module.exports = function (str) {
  var hasXAttr = str.match(regexs.x);
  var newX = Wrapper.width + Spriter.spaceBetweenSVG;
  return hasXAttr ? str.replace(x, 'x="' + newX + '"') : str.replace('<svg', '<svg x="' + newX + '"');
};

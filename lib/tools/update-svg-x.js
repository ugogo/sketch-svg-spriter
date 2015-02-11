var regexs = {
  hasX: /(<svg)(.*)(x=")(\d*)(")/,
  x: /((x=")(\d*)("))/
};

module.exports = function (str, newX) {
  var hasXAttr = str.match(regexs.x);
  return hasXAttr ? str.replace(x, 'x="' + newX + '"') : str.replace('<svg', '<svg x="' + newX + '"');
};

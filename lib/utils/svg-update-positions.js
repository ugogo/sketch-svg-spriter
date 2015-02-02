var regexs = {
  hasX: /(<svg)(.*)(x=")(\d*)(")/,
  x: /((x=")(\d*)("))/
};

module.exports = function (str) {
  var hasXAttr = str.match(regexs.x);
  var newX = Wrapper.width;

  if (hasXAttr)
    return str.replace(x, 'x="' + Wrapper.width + '"');
  else
    return str.replace('<svg', '<svg x="' + newX + '"');
};

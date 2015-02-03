var regexs = {
  width: /(<svg)(.*)(width=")(\d*)(")/,
  height: /(<svg)(.*)(height=")(\d*)(")/,
};

module.exports = function (str) {
  var width = str.match(regexs.width)[4];
  var height = str.match(regexs.height)[4];

  return {
    width: Number(width),
    height: Number(height)
  };
};

var regexs = {
  x: /(<svg)(.*)(x=")(\d*)(")/,
  w: /(<svg)(.*)(width=")(\d*)(")/,
  h: /(<svg)(.*)(height=")(\d*)(")/
};

module.exports = function (str) {
  var x = str.match(regexs.x) ? Number(str.match(regexs.x)[4]) : null;
  var w = str.match(regexs.w) ? Number(str.match(regexs.w)[4]) : null;
  var h = str.match(regexs.h) ? Number(str.match(regexs.h)[4]) : null;

  return {
    x: x,
    width: w,
    height: h
  };
};

module.exports = function (str) {
  var sizes = Utils.SVG_getSizes(str);

  Wrapper.width = Wrapper.width + sizes.width + Spriter.spaceBetweenSVG;

  if (sizes.height > Wrapper.height)
    Wrapper.height = Wrapper.height + sizes.height;
};

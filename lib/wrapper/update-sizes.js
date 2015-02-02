var getSizes = require('../utils//get-sizes');

module.exports = function (str) {
  var sizes = getSizes(str);
  var newContent = str.replace('<svg', '<svg x="' + Wrapper.width + '"');

  Wrapper.width = Wrapper.width + sizes.width;

  if (sizes.height > Wrapper.height)
    Wrapper.height = Wrapper.height + sizes.height;

  return newContent;
};

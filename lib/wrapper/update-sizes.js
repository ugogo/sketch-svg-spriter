var getSizes = require('../utils//get-sizes');

module.exports = function (str) {
  var sizes = getSizes(str);
  Wrapper.width = Wrapper.width + sizes.width;
  Wrapper.height = Wrapper.height + sizes.height;
};

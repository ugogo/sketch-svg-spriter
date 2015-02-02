/* For each .SVG file
 * Increment Wrapper width and height
 * Update Wrapper content */

var Wrapper = require('./wrapper/wrapper');

module.exports = function () {
  var files = u.each(this.opts.assets + '*.svg');

  files.forEach(function (path) {
    var content = u.readFile(path);
    Wrapper.updateSizes(content);
    Wrapper.contentArr.push(content);
  });

  Wrapper.build();
  console.log(Wrapper.content);
};

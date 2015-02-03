/* For each SVG file
 * Update Wrapper content
 * Increment Wrapper width and height
 * Create sprite.svg */

var Wrapper = require('./wrapper/wrapper');

module.exports = function () {
  var files = u.each(this.opts.assets + '*.svg');

  files.forEach(function (path) {
    var content = u.SVG_updatePositions(u.readFile(path));
    Wrapper.updateSizes(content);
    Wrapper.contentArr.push(content);
  });

  Wrapper.build();
  u.newFile(Spriter.opts.dist + 'sprite.svg', Wrapper.content);
};

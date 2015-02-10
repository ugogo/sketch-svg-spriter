/* For each SVG file
 * Update Wrapper content
 * Increment Wrapper width and height
 * Create sprite.svg */

var Wrapper = require('./wrapper/wrapper');

module.exports = function () {
  var files = Utils.each(this.opts.assets + '*.svg');

  files.forEach(function (path, i) {
    Spriter.spaceBetweenSVG = (i === 0 ? 0 : Spriter.opts.spaceBetweenSVG);

    var content = Utils.SVG_updatePositions(Utils.readFile(path));
    Wrapper.updateSizes(content);
    Wrapper.contentArr.push(content);
  });

  Wrapper.build();
  Utils.create.file(Spriter.opts.dist + 'sprite.svg', Wrapper.content);
};

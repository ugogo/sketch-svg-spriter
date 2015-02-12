/* For each SVG file
 * Update Wrapper content
 * Update Wrapper width and height
 * Compile CSS via template
 * Create sprite.svg */

var fs = require('fs');
var Css = require('./tools/css-manager');

module.exports = function () {
  var self = this;
  var opts = this.opts;
  var SvgFiles = Utils.each(opts.assets + '*.svg');

  Css = new Css(opts.cssTemplatePath);

  SvgFiles.forEach(function (path, i) {
    var content = Utils.readFile(path);
    var newContent = self.updateSvgX(content, SvgNewX);
    var SvgNewX = Wrapper.width + (i === 0 ? 0 : +opts.padding);
    var data = {};

    data.sizes = Utils.extract(content);
    data.name = path.split('/').pop().split('.').shift();
    data.position = {};
    data.position.x = SvgNewX;
    data.position.y = 0;

    Wrapper.updateContent(newContent);
    Wrapper.updateSizes(SvgNewX + data.sizes.width, data.sizes.height);

    if (Css.canCompile)
      Css.compile(data);
  });

  Utils.create.file(opts.dist + 'icons.css', Css.build());
  Utils.create.file(opts.dist + 'sprite.svg', Wrapper.build());
};

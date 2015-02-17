/* Create dist folder
 * Generate and clean Svg
 * Update X position
 * Build obj for template
 * Update wrapper content and size
 * Compile CSS template */

var Attrs = require('./tools/svg-attrs');

module.exports = function () {
  if (!this.opts.canContinue)
    return;

  var self = this;
  var files = this.exportSvg();

  Utils.create.folder(this.opts.distFolder);

  files.forEach(function (path, i) {
    var attrs = new Attrs();
    var content = Utils.readFile(path);
    var newX = Wrapper.width + (i === 0 ? 0 : +self.opts.padding);

    SvgManager.clean(content, path);

    content = Utils.readFile(path);
    content = SvgManager.updatePos(content, newX);

    attrs.name = path.split('/').pop().split('.').shift();
    attrs.sizes = Utils.extract(content);
    attrs.position.x = newX;

    Wrapper.updateContent(content);
    Wrapper.updateSizes(attrs.position.x + attrs.sizes.width, attrs.sizes.height);

    CssManager.compile(attrs);
  });

  Utils.create.file(this.opts.distFolder + 'sprite.svg', Wrapper.build());
  Utils.create.file(this.opts.cssDist, CssManager.build());
};

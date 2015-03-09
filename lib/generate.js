/* Create dist folder
 * Generate and clean Svg
 * Update X position
 * Build obj for template
 * Update wrapper content and size
 * Compile CSS template */

var Utils = require('uo-node-utils');
var Attrs = require('./tools/svg-attrs');

module.exports = function () {
  if (!this.opts.canContinue)
    return;

  var self = this;
  var files = this.exportSvg();
  var keepSingle = self.opts.svg.keepSingle;

  Utils.create.folder(this.opts.file.dist);

  SvgManager.silent = keepSingle;

  files.forEach(function (path, i) {
    var attrs = new Attrs();
    var content = Utils.read.file(path);
    var newX = Wrapper.width + (i === 0 ? 0 : +self.opts.svg.padding);

    SvgManager.clean(content, path);

    content = Utils.read.file(path);
    content = SvgManager.updatePos(content, newX);

    attrs.name = path.split('/').pop().split('.').shift();
    attrs.sizes = Utils.extract(content);
    attrs.position.x = newX;

    Wrapper.updateContent(content);
    Wrapper.updateSizes(attrs.position.x + attrs.sizes.width, attrs.sizes.height);

    CssManager.compile(attrs);
  });

  Utils.create.file(this.opts.file.dist + 'sprite.svg', Wrapper.build());
  Utils.create.file(this.opts.css.dist, CssManager.build());

  if (!keepSingle) {
    Utils.silent = true;
    Utils.del(this.opts.assets);
  }
};

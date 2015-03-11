/* Create dist folder
 * Generate and clean Svg
 * Update X position
 * Build obj for template
 * Update wrapper content and size
 * Compile CSS template */

var fs = require('fs');
var Utils = require('uo-node-utils');
var exec_sync = require('exec-sync');
var svgicons2svgfont = require('svgicons2svgfont');
var Attrs = require('./tools/svg-attrs');
var CssManager = require('./managers/css');

module.exports = function () {
  if (!this._opts.canContinue)
    return;
return console.log(this.opts);
  var Css = this._opts.Css ? new CssManager(this.opts.css.template) : {};
  var self = this;
  var files = this.exportSvg();
  var keepSingle = this.opts.svg.keepSingle;

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

    Css.compile(attrs);
  });

  Utils.create.file(this.opts.file.dist + 'sprite.svg', Wrapper.build());
  Utils.create.file(this.opts.css.dist, Css.build());

  exec_sync('svgicons2svgfont ' + this.opts.assets + ' dist/test.svg');
  console.log('> SVG font created');

  if (!keepSingle) {
    Utils.silent = true;
    Utils.del(this.opts.assets);
  }
};

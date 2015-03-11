/* generate();
 * export SVGs
 * Optimize SVGs
 * Build Wrapper */

var Utils = require('uo-node-utils');
var SVG = require('./svg/index');

module.exports = function () {
  if (!this._opts.canContinue)
    return;

  var opts = this.opts;

  SVG.export(opts.files.sketch, opts.assets);

  Utils.each(opts.assets + '*.svg', function (path, i) {
    var attrs = new SVG.attrs();
    var content = Utils.read.file(path);
    var newX = SVG.Wrapper.width + (i === 0 ? 0 : +opts.svg.padding);

    attrs.name = path.split('/').pop().split('.').shift();

    SVG.optimize(content, function (result) {
      content = result.data;
      attrs.sizes.width = +result.info.width;
      attrs.sizes.height = +result.info.height;
    });

    content = SVG.updateX(content, newX);

    SVG.Wrapper.updateContent(content);
    SVG.Wrapper.updateSizes(newX + attrs.sizes.width, attrs.sizes.height);

    Utils.create.file(path, content);
  });

  Utils.create.file(opts.files.dist + 'sprite.svg', SVG.Wrapper.build());
};

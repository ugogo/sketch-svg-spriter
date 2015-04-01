/* generate();
 * export SVGs
 * Optimize SVGs
 * Build Wrapper
 * Compile Css */

var Utils = require('uo-node-utils');
var PNG = require('./png/index');
var SVG = require('./svg/index');
var CSS = require('./css/index');

module.exports = function () {
  if (!this._opts.canContinue)
    return;

  var opts = this.opts;
  var _opts = this._opts;
  var canCompileCss = _opts.Css;
  var Css = new CSS(this.opts.css.template, canCompileCss);
  var cacheBusting = opts.cacheBusting;
  var timestamp = _opts.timestamp = new Date().getTime();

  _opts.spritePath = opts.files.dist + 'sprite-' + (cacheBusting ? timestamp : '' );

  SVG.export(opts.files.sketch, opts.assets);

  Utils.each(opts.assets + '*.svg', function (path, i) {
    var attrs = new SVG.attrs();
    var content = Utils.read.file(path);
    var newX = SVG.Wrapper.width + (i === 0 ? 0 : +opts.svg.padding);

    SVG.optimize(content, function (result) {
      attrs.name = path.split('/').pop().split('.').shift();
      attrs.positions.x = newX;
      attrs.sizes.width = +result.info.width;
      attrs.sizes.height = +result.info.height;

      content = result.data;
      content = SVG.updateX(content, newX);
    });

    SVG.Wrapper.updateContent(content);
    SVG.Wrapper.updateSizes(newX + attrs.sizes.width, attrs.sizes.height);

    if (canCompileCss)
      Css.compile(attrs, opts, _opts);

    Utils.create.file(path, content);
  });

  Utils.create.file(_opts.spritePath + '.svg', SVG.Wrapper.build());

  Utils.log('✓ .svg Sprite generated');

  if (canCompileCss) {
    Utils.create.file(opts.css.dist, Css.build());
    Utils.log('✓ Css template generated');
  }

  if (!opts.svg.keepSingle)
    Utils.del(opts.assets);

  if (opts.png)
    PNG.converter(_opts.spritePath + '.svg', function (err) {
      if (err) throw err;
      return Utils.log('✓ .png sprite generated');
    });
};

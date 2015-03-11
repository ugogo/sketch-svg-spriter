/* generate();
 * export SVGs
 * Optimize SVGs
 *
 */

var Utils = require('uo-node-utils');
var SVG = require('./svg/index');

module.exports = function () {
  if (!this._opts.canContinue)
    return;

  SVG.export(this.opts.files.sketch, this.opts.assets);

  Utils.each(this.opts.assets + '*.svg', function (path, i) {
    var attrs = new SVG.attrs();
    var content = Utils.read.file(path);

    SVG.optimize(content, function (result) {

      // {
      //   data: '<svg>[...]</svg>',
      //   info: { width: '20', height: '20' }
      // }

      content = result.data;
    });

    Utils.create.file(path, content);
  });
};

/* Clear dist folders
 * Export slices from .sketch
 * Clean SVG files generated
 * Build sprite */

module.exports = function (opts) {
  this.opts = opts;
  this.opts.assets = opts.dist + 'src/';

  Utils.clear(this.opts.dist);
  Utils.clear(this.opts.assets);

  this.exportSlices();
  this.cleanSVG();
  this.buildSprite();
};

/* Fresh start
 * Clear dist and assets folders
 * Export and clean SVG
 * Build sprite */

var fs = require('fs');

module.exports = function () {
  if (!fs.existsSync(this.opts.file))
    return console.log('\n> Error! Sketch file not found\n> Aborted.\n');

  this.opts.assets = this.opts.dist + 'src/';

  Utils.clear(this.opts.dist);
  Utils.clear(this.opts.assets);

  this.exportSvg();
  this.cleanSvg();
  this.buildSprite();
};

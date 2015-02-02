/*
 * Clear dist and assets folders
 * Export slices from .sketch
 * Clean SVG generated
 * Build sprite */

module.exports = function (opts) {
	this.opts = opts;
	this.opts.assets = opts.dist + 'src/';

	u.clearFolder(this.opts.dist);
	u.clearFolder(this.opts.assets);

	this.exportSlices();
	this.cleanSVG();
    this.buildSprite();

	return;
}

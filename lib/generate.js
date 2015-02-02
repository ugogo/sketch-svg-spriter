module.exports = function (opts) {
	this.opts = opts;
	this.opts.assets = opts.dist + 'src/';

	u.clearFolder(this.opts.dist);
	u.clearFolder(this.opts.assets);

	this.exportSlices();
	this.cleanSVG();
	this.buildWrapper();

	// Wrapper.update();
	// u.newFile('assets/test.svg', Wrapper.content)

	return;
}

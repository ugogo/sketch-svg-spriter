var fs = require('fs');
var CssManager = require('../managers/css');
var errors = 0;

function exist (path) {
	if (fs.existsSync(path))
		return true;

	console.log('\n> Error! File not found');
	console.log('> ' + path + '\n');

	errors++;

	return false;
};

module.exports = function () {
	var hasSketchFile = exist(this.opts.file);
	var hasCssTemplate = exist(this.opts.cssTemplate);

	this.opts.distFolder = Utils.formatPath(this.opts.distFolder);
	this.opts.canContinue = errors === 0;

	if (!hasCssTemplate)
		return

	global.CssManager = new CssManager(this.opts.cssTemplate);
};

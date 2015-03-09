var Utils = require('uo-node-utils');
var CssManager = require('../managers/css');
var errors = 0;

function exist (path) {
	if (Utils.exist(path))
		return true;

	console.log('\n> Error! File not found');
	console.log('> ' + path + '\n');

	errors++;

	return false;
};

module.exports = function () {
	var hasSketchFile = exist(this.opts.file.sketch);
	var hasCssTemplate = exist(this.opts.css.template);

	this.opts.file.dist = Utils.formatPath(this.opts.file.dist);
	this.opts.canContinue = errors === 0;

	if (!hasCssTemplate)
		return

	global.CssManager = new CssManager(this.opts.css.template);
};

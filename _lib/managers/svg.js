var Utils = require('uo-node-utils');
var SVGO = require('svgo');
var svgo = new SVGO();

function clean (content, path) {
	var self = this;
	return svgo.optimize(content, function (result) {
		if (!self.silent) Utils.silent = true;
		Utils.create.file(path, result.data);
		return Utils.silent = false;
	});
};

function updatePos (content, value) {
	var alreadyHasX = content.match(Utils.regexs.SvgHasX);
	var newValue = 'x="' + value + '"';

	if (alreadyHasX)
		return content.replace(Utils.regexs.x, newValue);
	else
		return content.replace('<svg', '<svg ' + newValue);
};

module.exports = {
	clean: clean,
	updatePos: updatePos
};

var SVGO = require('svgo');
var svgo = new SVGO();

function clean (content, path) {
	return svgo.optimize(content, function (result) {
		return Utils.create.file(path, result.data);
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

var regexs = {
	hasX: /(<svg)(.*)(\sx=")(\d*)(")/,
	x: /((x=")(\d*)("))/
};

module.exports = function (str, x) {
	var hasX = str.match(regexs.hasX);
	var newX = 'x="' + x + '"';

	if (hasX)
		return str.replace(regexs.x, newX);
	else
		return str.replace('<svg', '<svg ' + newX);
};

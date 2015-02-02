var SVGWrapper = require('./utils/wrapper');
var getSizes = require('./utils/get-sizes');

module.exports = function () {
	var files = u.each(this.opts.assets + '*.svg');

	files.forEach(function (path) {
		var content = u.readFile(path);
		var sizes = getSizes(content);

		SVGWrapper.width = SVGWrapper.width + sizes.width;
		SVGWrapper.height = SVGWrapper.height + sizes.height;
		SVGWrapper.contentArr.push(content);
	})

	SVGWrapper.build();
	u.newFile(this.opts.dist + 'sprite.svg', SVGWrapper.content);
}

var SVGO = require('../../node_modules/svgo/lib/svgo');
var svgo = new SVGO();

module.exports = function () {
	var files = u.each(this.opts.assets + '*.svg');
	files.forEach(function (path) {
		svgo.optimize(u.readFile(path), function (result) {
			u.newFile(path, result.data);
		})
	})
}

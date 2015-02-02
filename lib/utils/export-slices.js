var exec_sync = require('exec-sync');

module.exports = function () {
	return exec_sync('sketchtool export slices ' + this.opts.file + ' --output="' + this.opts.assets + '" --save-for-web=true --compact=true --compression=true');
}

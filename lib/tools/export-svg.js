/* Export SVGs
 * via sketchtool */

var exec_sync = require('exec-sync');

module.exports = function () {
	var arr = [];

	arr.push('sketchtool export slices ' + this.opts.file);
	arr.push('--output="' + this.opts.assets + '"');
	arr.push('--save-for-web=true --compact=true --compression=true');

	exec_sync(arr.join(' '));

	return Utils.each(this.opts.assets + '*.svg');
};

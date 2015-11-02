/* Export SVGs
 * via sketchtool */

var Utils = require('uo-node-utils'),
    ExecSync = require('child_process').execSync;

module.exports = function (src, dist) {
	var arr = [];

	arr.push('sketchtool export slices ' + src);
	arr.push('--output="' + dist + '"');
	arr.push('--save-for-web=true --compact=true --compression=true');

	return ExecSync(arr.join(' '));
};

/* Export SVGs
 * via sketchtool */

var Utils = require('uo-node-utils');
var exec_sync = require('exec-sync');

module.exports = function (src, dist) {
	var arr = [];

	arr.push('sketchtool export slices ' + src);
	arr.push('--output="' + dist + '"');
	arr.push('--save-for-web=true --compact=true --compression=true');

	return exec_sync(arr.join(' '));
};

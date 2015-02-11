var extend = require('extend');
var defaults = require('./default');

module.exports = function (userOpts) {
	this.opts = extend( true, _default, userOpts );
};

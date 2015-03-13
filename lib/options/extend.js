/* Extend userOpts with default ones
 * Format paths */

var Utils = require('uo-node-utils');
var extend = require('extend');
var defaultOpts = require('./defaults');

require('./utils');

module.exports = function (userOpts) {
	this.opts = extend(true, defaultOpts, userOpts);
	this.opts.files.dist = Utils.formatPath(this.opts.files.dist);
	this.opts.assets = this.opts.files.dist + 'icons_single/';
};

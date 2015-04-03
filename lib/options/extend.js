/* Extend userOpts with default ones
 * Format paths */

var Utils = require('uo-node-utils');
var extend = require('extend');
var defaultOpts = require('./defaults');

require('./utils');

module.exports = function (userOpts) {
	this.opts = extend(true, defaultOpts, userOpts);
	this.opts.files.dist = Utils.formatPath(this.opts.files.dist);

	var opts = this.opts;
	var cacheBusting = this.opts.cacheBusting;
	var timestamp = new Date().getTime();

	this._opts = {
		assets: opts.files.dist + 'icons_single/',
		spritePath: opts.files.dist + 'sprite' + (cacheBusting ? '-' + timestamp : '' ),
		timestamp: timestamp
	};
};

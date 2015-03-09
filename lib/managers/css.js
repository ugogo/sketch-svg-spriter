var _ = require('underscore');
var Utils = require('uo-node-utils');

module.exports = function (template) {
	this.template = Utils.read.file(template);
	this.arr = [];

	this.compile = function (data) {
		return this.arr.push(
			_.template(this.template)(data)
		);
	};

	this.build = function () {
		return this.arr.join('\n');
	};
};

var _ = require('underscore');

module.exports = function (cssTemplate) {
	this.template = Utils.readFile(cssTemplate);
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

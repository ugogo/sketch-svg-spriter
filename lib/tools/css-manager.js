var _ = require('underscore');
var fs = require('fs');
var path = require('path');

module.exports = function (templatePath) {
	templatePath = path.resolve('./', templatePath);

	if (!fs.existsSync(templatePath)) {
		this.canCompile = false;
		return console.log('CSS template file not found');
	}

	this.canCompile = true;
	this.template = Utils.readFile(templatePath);
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

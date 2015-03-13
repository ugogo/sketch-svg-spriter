var _ = require('underscore');
var Utils = require('uo-node-utils');

module.exports = function (template, canCompile) {
  if (!canCompile)
    return;

  this.content = [];
  this.template = Utils.read.file(template);

  this.compile = function (data) {
    var newContent = _.template(this.template)(data);
    this.content.push(newContent);
  };

  this.build = function () {
		return this.content.join('\n');
	};
}

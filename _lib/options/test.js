var Utils = require('uo-node-utils');
var errorsManager = require('../managers/errors');

module.exports = function () {
	var errors = new errorsManager();
	var opts = this.opts;

	this._opts = {
		canContinue: false,
		Css: false
	};

	if (!Utils.exist(opts.file.sketch))
		return errors.log('Sketch file not found', 'opts.file.sketch');

	if (this.opts.css) {
		if (!Utils.exist(opts.css.template))
			return errors.log('Css template not found', 'opts.css.template')
		this._opts.Css = true;
	}

	this._opts.canContinue = true;
	return this;
};

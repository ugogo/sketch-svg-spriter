var exec = require('child_process').exec;
var Utils = require('uo-node-utils');

global.u = new Utils();

module.exports = Spriter = {
	exportSlices: require('./utils/export-slices'),
	buildWrapper: require('./build-wrapper'),
	cleanSVG: require('./utils/clean-svg'),
	generate: require('./generate')
};

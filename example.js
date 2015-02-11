var SVGSpriter = require('./lib/index');

var Spriter = new SVGSpriter({
	file: 'icons.sketch',
	dist: 'assets/',
	padding: 20
})

Spriter.generate();

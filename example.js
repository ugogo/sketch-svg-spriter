var SVGSpriter = require('./lib/index');

var Spriter = new SVGSpriter({
	file: 'icons.sketch',
	dist: 'assets/',
	padding: 50,
	cssTemplatePath: './template.css'
})

Spriter.generate();

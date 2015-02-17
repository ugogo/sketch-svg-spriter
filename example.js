var SVGSpriter = require('./lib/index');

var Spriter = new SVGSpriter({
	file: 'example/src/icons-solid.sketch',
	distFolder: 'example/dist/',
	padding: 20,
	cssTemplate: 'example/assets/template.css',
	cssDist: 'example/dist/icons.css'
});

Spriter.generate();

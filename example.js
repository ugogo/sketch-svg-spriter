var SVGSpriter = require('./lib/index');

var Spriter = new SVGSpriter({
	file: {
		sketch: 'example/src/icons-solid.sketch',
		dist: 'dist'
	},
	svg: {
		keepSingle: true,
		padding: 20
	},
	css: {
		template: 'example/assets/template.css',
		dist: 'dist/icons.css'
	}
})
.generate();

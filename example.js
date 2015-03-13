var SVGSpriter = require('./lib/index');

var Spriter = new SVGSpriter({
	files: {
		sketch: 'example/src/icons-solid.sketch',
		dist: 'icons'
	},
	svg: {
		padding: 20
	},
	css: {
		template: 'example/assets/template.css',
		dist: 'icons/icons.css'
	}
})
.generate();

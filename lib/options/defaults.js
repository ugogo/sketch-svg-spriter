module.exports = {
	silent: false,
	files: {
		sketch: 'example/src/icons.sketch',
		dist: 'example/dist/',
		name: 'sprite'
	},
	svg: {
		keepSingle: false,
		padding: 0
	},
	css: {
		template: 'example/src/template.css',
		dist: 'example/dist/icons.css',
		className: 'Icon'
	},
	png: false,
	cacheBusting: false,
	clearBeforeGenerate: false
};

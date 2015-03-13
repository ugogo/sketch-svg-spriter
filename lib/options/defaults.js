module.exports = {
	silent: false,
	files: {
		sketch: 'example/src/icons-solid.sketch',
		dist: 'example/dist'
	},
	svg: {
		keepSingle: true,
		padding: 0
	},
	css: {
		template: 'example/assets/template.css',
		dist: 'dist/icons.css'
	}
};
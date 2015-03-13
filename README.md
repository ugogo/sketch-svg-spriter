# Sketch-SVG-Spriter

Generate SVG sprites and Css template (underscore template) from your Sketch file


## Install
```
npm install --save-dev sketch-svg-spriter
```


## Usage example

```js
var SVGSpriter = require('sketch-svg-spriter');

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

```



## Default options

```js
var defaultOpts = {

  /* files {}

   * files.src: 'string'
   * path to your Sketch file

   * files.dist: 'string'
   * where your files will be output
   */

	files: {
		src: 'example/src/icons.sketch',
		dist: 'dist',
	},

  /* svg {}

   * svg.padding: number
   * space between your icons in sprite

   * components.keepSingle: boolean'
   * before the sprite is generated, each icon is exporter has .svg file
   * if you want to keep them, set keepSingle to `true`
   */

	svg: {
	  padding: 0,
		keepSingle: true,
	},

  /* css {}

   * css.template: 'string'
   * path to your css template

   * css.dist: 'string'
   * where your css will be output
   */

  css: {
    template: 'example/assets/template.css',
    dist: 'dist/icons/css'
  },

  /* silent: boolean
   * log a message when action is done
   * -> uo-node-utils package
   */

	silent: false
};
```


# The MIT License (MIT)

Copyright (c) 2015 Ugo Onali (http://twitter.com/onaliugo)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

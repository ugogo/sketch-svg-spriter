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
		sketch: 'src/icons.sketch',
		dist: 'dist/icons/'
	},
	svg: {
		padding: 20
	},
	css: {
		template: 'src/scss/icons/template.css',
		dist: 'dist/css/icons.css'
	},
	png: true
})
.generate();

```



## Options

### files: `object`

#### files.src: `string`
path to your Sketch file

#### files.dis*: `string`
where your svgs will be output

#### files.name: `string`
filename of your sprite

```js
var opts = {
	files: {
		src: 'example/src/icons.sketch',
		dist: 'example/dist/imgs/svg',
		name: 'sprite',
	}
};
```

---

### svg: `object`

#### svg.padding: `number`
space between svgs in sprite

#### svg.keepSingle: `boolean`
before the sprite is generated, each icon is exporter has .svg file,
set keepSingle to `true` to keep them

```js
var opts = {
	svg: {
		padding: 0,
		keepSingle: false
	}
};
```

---

### css: `object` or `false`

#### css.template: `string`
path to your css template

#### css.dist: `string`
where your css will be output

#### css.className: `string`
classname of sprite items

```js
var opts = {
	css: {
		template: 'example/assets/template.css',
		dist: 'dist/css/icons.css',
		className: 'Icon'
	}
};
```

---

### png: `boolean`
generate a png fallback of the sprite

```js
var opts = {
	png: true
};
```

---

### clearBeforeGenerate: `boolean`
clear dist folder (`files.dist`) before generate svgs

```js
var opts = {
	clearBeforeGenerate: true
};
```

---

### silent: `boolean`
log a message when action is done

```js
var opts = {
	silent: false
};
```

---

### cacheBusting: `boolean`

```js
var opts = {
	cacheBusting: false
};
```

---

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

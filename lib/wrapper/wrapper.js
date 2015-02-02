module.exports = {
  width: 0, height: 0,
  contentArr: [],
  content: '',
  openTag: function () {
    return '<svg width="' + this.width + '" height="' + this.height + '" viewBox="0 0 ' + this.width + ' ' + this.height + '" xmlns="http://www.w3.org/2000/svg">';
  },
  closeTag: '</svg>',
  reset: function () {
    this.width = 0;
    this.height = 0;
    this.contentArr = [];
  },
  updateSizes: require('./update-sizes'),
  build: function () {
    return this.content = this.openTag() + this.contentArr.join('') + this.closeTag;
  }
};



/*
var getSizes = require('./utils/get-sizes');
var files = u.each(this.opts.assets + '*.svg');

files.forEach(function (path) {
var content = u.readFile(path);
var sizes = getSizes(content);
SVGWrapper.width = SVGWrapper.width + sizes.width;
SVGWrapper.height = SVGWrapper.height + sizes.height;
SVGWrapper.contentArr.push(content);
})

*/

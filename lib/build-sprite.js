/* For each SVG file
 * Update Wrapper content
 * Update Wrapper width and height
 * Create sprite.svg */

module.exports = function () {
  var self = this;
  var basePadding = Number(this.opts.padding);
  var distFile = this.opts.dist + 'sprite.svg';
  var SvgFiles = Utils.each(this.opts.assets + '*.svg');

  SvgFiles.forEach(function (path, i) {
    var isFirstLoop = (i === 0);
    var content = Utils.readFile(path);
    var sizes = Utils.extract(content);
    var padding = isFirstLoop ? 0 : basePadding;

    var newX = Wrapper.width + padding;
    var newWrapperWidth = newX + sizes.width;

    content = self.updateSvgX(content, newX);
    Wrapper.updateSizes(newWrapperWidth, sizes.height);
    Wrapper.updateContent(content);
  });

  return Utils.create.file(distFile, Wrapper.build());
};

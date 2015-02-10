var SVGO = require('../../node_modules/svgo/lib/svgo');
var svgo = new SVGO();

module.exports = function () {
  var files = Utils.each(this.opts.assets + '*.svg');
  return files.forEach(function (path) {
    return svgo.optimize(Utils.readFile(path), function (result) {
      return Utils.create.file(path, result.data);
    });
  });
};

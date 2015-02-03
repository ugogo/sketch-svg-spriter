var SVGO = require('../../node_modules/svgo/lib/svgo');
var svgo = new SVGO();

module.exports = function () {
  var files = u.each(this.opts.assets + '*.svg');
  return files.forEach(function (path) {
    return svgo.optimize(u.readFile(path), function (result) {
      return u.newFile(path, result.data);
    });
  });
};

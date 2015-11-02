var _ = require('underscore');

module.exports = function (data, opts, _opts) {
  var newContent = _.template(this.template)({
    icons: data,
    timestamp: _opts.timestamp,
    cacheBusting: _opts.cacheBusting,
    className: _opts.className,
    fileName: _opts.fileName,
    png: _opts.png
  });

  this.content.push(newContent);

  return newContent;
};

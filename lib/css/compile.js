var _ = require('underscore');

module.exports = function (data, opts, _opts) {
  var newContent = _.template(this.template)({
    icons: data,
    spritePath: _opts.spritePath,
    timestamp: _opts.timestamp
  });

  if (opts.cacheBusting)
    newContent = this.cacheBusting(newContent, opts, _opts);

  this.content.push(newContent);

  return newContent;
};

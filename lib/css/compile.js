var _ = require('underscore');

module.exports = function (data, opts, _opts) {
  var spritePath = opts.files.dist + 'sprite';
  var newContent = _.template(this.template)(data);

  if (opts.cacheBusting)
    newContent = this.cacheBusting(newContent, opts, _opts);

  this.content.push(newContent);

  return newContent;
};

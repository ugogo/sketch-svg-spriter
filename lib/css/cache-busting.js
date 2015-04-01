var Utils = require('uo-node-utils');

module.exports = function (str, opts, _opts) {
  regex = new RegExp('(' + opts.files.dist + 'sprite)(.)(svg|png)', 'g');

  str = str.replace(regex, function (url, $1, $2, $3, complete) {
    return $1 + '-' + _opts.timestamp + $2 + $3;
  });
  return str;
};

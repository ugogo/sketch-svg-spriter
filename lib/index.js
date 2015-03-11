var Utils = require('uo-node-utils');

module.exports = function (userOpts) {
  Utils.silent = userOpts.silent || false;

  this.generate = function () {};

  require('./options/extend').call(this, userOpts);
  require('./options/compare').call(this);
};

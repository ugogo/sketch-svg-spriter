var Utils = require('uo-node-utils');

Utils.extend({
  name: 'formatPath',
  content: function (path) {
    return path.charAt(path.length - 1) !== '/' ? path + '/' : path;
  }
});

module.exports = {
  width: 0,
  height: 0,
  content: [],

  updateSizes: function (w, h) {
    if (h > this.height)
      this.height = h;

    this.width = w;
  },

  updateContent: function (newContent) {
    return this.content.push(newContent);
  },

  openTag: function () {
    var arr = [];

    arr.push('<svg width="' + this.width + '"');
    arr.push('height="' + this.height + '"');
    arr.push('viewBox="0 0 ' + this.width + ' ' + this.height + '"');
    arr.push('xmlns="http://www.w3.org/2000/svg">');

    return arr.join(' ');
  },

  build: function () {
    this.content = this.openTag() + this.content.join('') + '</svg>';
    return this.content;
  }
};

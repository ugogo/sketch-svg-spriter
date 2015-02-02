module.exports = (function () {
	return {
		width: 0,
		height: 0,
		closeTag: '</svg>',
		contentArr: [],
		content: null,
		openTag: function () {
			return '<svg width="' + this.width + '" height="' + this.height + '" viewBox="0 0 ' + this.width + ' ' + this.height + '" xmlns="http://www.w3.org/2000/svg">';
		},
		build: function () {
			return this.content = this.openTag() + this.contentArr.join('') + this.closeTag;
		}
	}
}());

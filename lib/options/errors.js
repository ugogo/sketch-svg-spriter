module.exports = {
	errors: 0,
	log: function(str, opts) {
		this.errors++;
		return console.log('> Error! ' + str + (opts ? '\n> ' + opts : ''));
	},
	count: function () {
		return this.errors.length;
	},
	reset: function () {
		this.errors = 0;
		return this;
	}
};

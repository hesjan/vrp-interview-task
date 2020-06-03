const fs = require('fs');

module.exports = class Logger {
	constructor() {
		this.pathToScreenshots = './screenshots';
	}
	makeScreenshot(fileName) {
		if (!fs.existsSync(this.pathToScreenshots)) {
			fs.mkdirSync(this.pathToScreenshots);
		}
		browser.saveScreenshot(`./screenshots/${fileName}`);
	}
};

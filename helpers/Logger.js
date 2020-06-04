const fs = require('fs');
const allure = require('@wdio/allure-reporter').default;

module.exports = class Logger {
	constructor() {
		this.pathToScreenshots = './screenshots';
	}
	makeScreenshot(fileName) {
		if (!fs.existsSync(this.pathToScreenshots)) {
			fs.mkdirSync(this.pathToScreenshots);
		}
		const screenshot = browser.saveScreenshot(`./screenshots/${fileName}`);
		try {
			allure.addAttachment('Screenshot on failure', screenshot, 'image/png');
		} catch (e) {
			console.log('Unable to create attachment in allure report');
		}
	}
	step(stepName) {
		allure.addStep(stepName);
	}
};

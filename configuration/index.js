const capabilities = require('./capabilities');
const browserName = process.env.BROWSER || 'chrome';
function getCapabilities() {
	switch (browserName) {
		case 'firefox': {
			return capabilities.firefox;
		}
		case 'chrome': {
			return capabilities.chrome;
		}
		default: {
			return capabilities.chrome;
		}
	}
}
module.exports = {
	getCapabilities,
};

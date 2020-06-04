export const startBrowserMaximized = (width, height) => {
	logger.step('Starting browser and maximizing it');
	browser.url('');
	browser.maximizeWindow();
};

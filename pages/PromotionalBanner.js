class PromotionalBanner {
	get section() {
		return $('#dialog-content');
	}
	get rejectButton() {
		return $('button[data-role="reject-consent"]');
	}
	get rejectButton() {
		return $('button[data-role="accept-consent"]');
	}
	rejectConsent() {
		logger.step('Rejecting consent');
		this.rejectButton.waitForDisplayed();
		this.rejectButton.click();
	}
	acceptConsent() {
		this.acceptButton.waitForDisplayed();
		this.acceptButton.click();
	}
}
export default new PromotionalBanner();

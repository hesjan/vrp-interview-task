class Basket {
	get section() {
		return $('div[data-slot-name="content"]');
	}
	get productName() {
		return $('offer-title');
	}
	getProductName() {
		logger.step('Getting name of the product from Basket page');
		this.productName.waitForDisplayed();
		return this.productName.getText();
	}
}
export default new Basket();

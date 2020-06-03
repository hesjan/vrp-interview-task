class Basket {
	get section() {
		return $('div[data-slot-name="content"]');
	}
	get productName() {
		return $('offer-title');
	}
	getProductName() {
		this.productName.waitForDisplayed();
		return this.productName.getText();
	}
}
export default new Basket();

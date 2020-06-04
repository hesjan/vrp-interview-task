class Product {
	get section() {
		return $('[data-box-name="summary"]');
	}
	get addToBasketButton() {
		return $('#add-to-cart-button');
	}
	get name() {
		return $('[data-box-name="summary"] h1');
	}
	clickAddToBasketButton() {
		logger.step('Adding product to basket');
		this.addToBasketButton.waitForDisplayed();
		this.addToBasketButton.click();
	}
	getName() {
		logger.step('Getting name of the product from product page');
		this.name.waitForDisplayed();
		return this.name.getText();
	}
}
export default new Product();

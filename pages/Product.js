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
		this.addToBasketButton.waitForDisplayed();
		this.addToBasketButton.click();
	}
	getName() {
		this.name.waitForDisplayed();
		return this.name.getText();
	}
}
export default new Product();

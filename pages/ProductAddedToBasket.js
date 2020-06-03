class ProductAddedToBasketModal {
	get goToBasketButton() {
		return $('a[data-analytics-click-label="goToCart"]');
	}
	get continueShoppingButton() {
		return $('button[data-analytics-interaction-label="continueShopping"]');
	}
	clickOnGoToBasket() {
		this.goToBasketButton.waitForDisplayed();
		this.goToBasketButton.click();
	}
}
export default new ProductAddedToBasketModal();

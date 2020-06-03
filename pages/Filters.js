class Filters {
	get section() {
		return $('[data-box-name="Filtry"]');
	}
	get buyNowFilter() {
		return $('[data-box-name="Filtry"] a[href*="offerTypeBuyNow"]');
	}
	clickOnlyBuyNow() {
		this.buyNowFilter.waitForDisplayed();
		this.buyNowFilter.click();
	}
}
export default new Filters();

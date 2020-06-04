class Filters {
	get section() {
		return $('[data-box-name="Filtry"]');
	}
	get buyNowFilter() {
		return $('[data-box-name="Filtry"] a[href*="offerTypeBuyNow"]');
	}
	get sectionTitle() {
		return $('[data-box-name="Listing title"]');
	}
	showOnlyBuyNowProducts() {
		logger.step('Filtering only buy now products');
		const currentTitle = this.sectionTitle.getText();
		this.buyNowFilter.waitForDisplayed();
		this.buyNowFilter.click();
		// Waiting until number of products in the title is changed - it means that filter is applied
		// and there is different number of products
		browser.waitUntil(() => {
			return currentTitle !== this.sectionTitle.getText();
		});
	}
}
export default new Filters();

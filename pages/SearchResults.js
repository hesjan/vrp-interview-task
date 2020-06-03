class SearchResults {
	get section() {
		return $('div.opbox-listing-layout');
	}
	get searchedPhrase() {
		return $('div[data-box-name="title with didyoumean"]');
	}
	get productsSection() {
		return $('#opbox-listing--base');
	}
	get productsOnThePage() {
		return $$('#opbox-listing--base article');
	}
	selectRandomProductOnThePage() {
		this.section.waitForDisplayed();
		const numberOfProduct = this.productsOnThePage.length;
		const randomNumber = Math.floor(Math.random() * numberOfProduct);
		this.productsOnThePage[randomNumber].click();
	}
}
export default new SearchResults();

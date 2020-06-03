class Header {
	get section() {
		return $('header[data-role="header-wrapper"]');
	}
	get searchInput() {
		return $('input[type="search"]');
	}
	get searchButton() {
		return $('button[data-role="search-button"]');
	}
	searchFor(searchPhrase) {
		this.searchInput.waitForDisplayed();
		this.searchInput.setValue(searchPhrase);
		// I decided to use enter because I believe it's more common scenario then clicking on eyeglass, in standard project I would prefer to cover both scenarios
		browser.keys('Enter');
	}
}
export default new Header();

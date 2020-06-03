import Header from '../pages/Header';
import SearchResults from '../pages/SearchResults';
import PromotionalBanner from '../pages/PromotionalBanner';
import Product from '../pages/Product';
import ProductAddedToBasket from '../pages/ProductAddedToBasket';
import Basket from '../pages/Basket';
import { startBrowserMaximized } from '../helpers/test-utils';

describe('User', () => {
	it(`should be able to order product`, () => {
		startBrowserMaximized();
		PromotionalBanner.rejectConsent();
		Header.searchFor('Bayern Monachium Strój');
		SearchResults.selectRandomProductOnThePage();
		const productName = Product.getName();
		Product.clickAddToBasketButton();
		ProductAddedToBasket.clickOnGoToBasket();
		const productNameFromBasket = Basket.getProductName();
		expect(productNameFromBasket).to.equal(`${productName}`);
	});
});

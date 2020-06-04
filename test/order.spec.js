import Header from '../pages/Header';
import SearchResults from '../pages/SearchResults';
import PromotionalBanner from '../pages/PromotionalBanner';
import Product from '../pages/Product';
import ProductAddedToBasket from '../pages/ProductAddedToBasket';
import Basket from '../pages/Basket';
import { startBrowserMaximized } from '../helpers/test-utils';
import Filters from '../pages/Filters';

describe('User', () => {
	const testData = [{ productGroup: 'Juventus Turyn' }, { productGroup: 'Bayern Monachium' }];

	testData.forEach(data => {
		it(`should be able to order product related to ${data.productGroup}`, () => {
			startBrowserMaximized();
			PromotionalBanner.rejectConsent();
			Header.searchFor(data.productGroup);
			Filters.showOnlyBuyNowProducts();
			SearchResults.selectRandomProductOnThePage();
			const productName = Product.getName();
			Product.clickAddToBasketButton();
			ProductAddedToBasket.clickOnGoToBasket();
			const productNameFromBasket = Basket.getProductName();
			expect(productNameFromBasket).to.have.string(productName);
		});
	});
});

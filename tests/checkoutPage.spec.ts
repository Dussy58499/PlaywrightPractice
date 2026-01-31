import { test, expect } from '@playwright/test';
import { inventoryPageUrl, storageStatePath, checkoutCompletePageUrl } from './utils';
import CheckoutPage from './support/pages/checkout.page';
import Header from "./support/pages/header";
import InventoryPage from "./support/pages/inventory.page";
import Cartpage from './support/pages/cart.page';
import CheckoutOverviewPage from './support/pages/checkoutOverview.page';

test.use({ storageState: storageStatePath });

test('Valid data Checkout', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const header = new Header(page);
    const cartPage = new Cartpage(page);
    const checkoutPage = new CheckoutPage(page);
    const checkoutOverviewPage = new CheckoutOverviewPage(page);

    await inventoryPage.visitPage(inventoryPageUrl);
    await inventoryPage.clickAddCartBtn();
    await header.clickCartBtn();
    await cartPage.clickCheckoutBtn();
    await checkoutPage.fillCheckoutForm('Ivan', 'Ivaniv', '77777');
    await checkoutPage.clickContinueBtn();
    await checkoutOverviewPage.clickFinishBtn();
    await expect(page).toHaveURL(checkoutCompletePageUrl);
});

test('Empty data Checkout', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const header = new Header(page);
    const cartPage = new Cartpage(page);
    const checkoutPage = new CheckoutPage(page);

    await inventoryPage.visitPage(inventoryPageUrl);
    await inventoryPage.clickAddCartBtn();
    await header.clickCartBtn();
    await cartPage.clickCheckoutBtn();
    await checkoutPage.fillCheckoutForm('', 'Ivaniv', '77777');
    await checkoutPage.clickContinueBtn();
    await expect(checkoutPage.errorMessage()).toBeVisible();
});

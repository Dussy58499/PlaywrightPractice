import { test, expect } from '@playwright/test';
import { inventoryPageUrl, storageStatePath, checkoutCompletePageUrl } from '../Helper/utils';
import CheckoutPage from '../pages/checkout.page';
import InventoryPage from "../pages/inventory.page";
import Cartpage from '../pages/cart.page';
import CheckoutOverviewPage from '../pages/checkoutOverview.page';

test.use({ storageState: storageStatePath });

let inventoryPage: InventoryPage;
let cartPage: Cartpage;
let checkoutPage: CheckoutPage;
let checkoutOverviewPage: CheckoutOverviewPage;

test.beforeEach(async ({ page }) => {
    inventoryPage = new InventoryPage(page);
    cartPage = new Cartpage(page);
    checkoutPage = new CheckoutPage(page);
    checkoutOverviewPage = new CheckoutOverviewPage(page);
});

test.describe('Checkout process', () => {

    test('Valid data Checkout', async ({ page }) => {

        await inventoryPage.visitPage(inventoryPageUrl);
        await inventoryPage.clickAddCartBtn();
        await inventoryPage.clickCartBtn();
        await cartPage.clickCheckoutBtn();
        await checkoutPage.fillCheckoutForm('Ivan', 'Ivaniv', '77777');
        await checkoutPage.clickContinueBtn();
        await checkoutOverviewPage.clickFinishBtn();
        await expect(page).toHaveURL(checkoutCompletePageUrl);
    });

    test('Empty data Checkout', async () => {

        await inventoryPage.visitPage(inventoryPageUrl);
        await inventoryPage.clickAddCartBtn();
        await inventoryPage.clickCartBtn();
        await cartPage.clickCheckoutBtn();
        await checkoutPage.fillCheckoutForm('', 'Ivaniv', '77777');
        await checkoutPage.clickContinueBtn();
        await expect(checkoutPage.errorMessage()).toBeVisible();
    });
}); 
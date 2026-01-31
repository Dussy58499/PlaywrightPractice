import { test, expect } from '@playwright/test';
import { storageStatePath, inventoryPageUrl } from './utils';
import Header from "./support/pages/header";
import Cartpage from "./support/pages/cart.page";
import InventoryPage from "./support/pages/inventory.page";

test.use({ storageState: storageStatePath });

test.describe('Routing', () => {
    let inventoryPage: InventoryPage;
    let cartPage: Cartpage;

    test.beforeEach(async ({ page }) => {
        inventoryPage = new InventoryPage(page);
        cartPage = new Cartpage(page);
    });

    test('add to Cart', async () => {
        await inventoryPage.visitPage(inventoryPageUrl);
        await inventoryPage.clickAddCartBtn();
        await inventoryPage.clickCartBtn();
        await expect(cartPage.itemQuantity()).toHaveText('1');
    });

    test('remove from Cart', async () => {
        await inventoryPage.visitPage(inventoryPageUrl);
        await inventoryPage.clickAddCartBtn();
        await inventoryPage.clickCartBtn();
        await inventoryPage.clickRemoveItemBtn();
        await expect(cartPage.itemQuantity()).not.toBeVisible();
        await expect(inventoryPage.cartBadge()).not.toBeVisible();
    });

});
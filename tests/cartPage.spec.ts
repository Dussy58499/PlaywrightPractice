import { test, expect } from '@playwright/test';
import {inventoryPageUrl } from '../helper/Endpoint.json';
import {storageStatePath} from '../helper/Credentials.ts';
import Cartpage from "../pages/cart.page";
import InventoryPage from "../pages/inventory.page";

let inventoryPage: InventoryPage;
let cartPage: Cartpage;

test.beforeEach(async ({ page }) => {
    inventoryPage = new InventoryPage(page);
    cartPage = new Cartpage(page);
});

test.use({ storageState: storageStatePath });

test.describe('Cart process via cart page', () => {

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
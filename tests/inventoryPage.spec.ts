import InventoryPage from "./support/pages/inventory.page";
import { test, expect } from '@playwright/test';
import {storageStatePath, inventoryPageUrl } from './utils';
import Header from "./support/pages/header";

test.use({ storageState: storageStatePath });

 test('add to Cart', async ({ page }) => {
    const inventoryPage= new InventoryPage(page);
    const header = new Header(page);

   await inventoryPage.visitPage(inventoryPageUrl);
   await inventoryPage.clickAddCartBtn();
   await expect(header.cartIcon()).toHaveText('1');
});

 test('remove from Cart', async ({ page }) => {
    const inventoryPage= new InventoryPage(page);
    const header = new Header(page);

   await inventoryPage.visitPage(inventoryPageUrl);
   await inventoryPage.clickAddCartBtn();
  //await expect(header.CartBadge()).toHaveText('1');//
   await inventoryPage.clickRemoveItemBtn();
   await expect(header.cartBadge()).not.toBeVisible();
});


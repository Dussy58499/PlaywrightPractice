import InventoryPage from "../pages/inventory.page";
import { test, expect } from '@playwright/test';
import {inventoryPageUrl} from '../helper/Endpoint.json';

let inventoryPage: InventoryPage;

test.beforeEach(async ({ page }) => {
   inventoryPage = new InventoryPage(page);
});

test.describe('Cart process via inventory page', () => {

   test('add to Cart', async () => {

      await inventoryPage.visitPage(inventoryPageUrl);
      await inventoryPage.clickAddCartBtn();
      await expect(inventoryPage.cartIcon()).toHaveText('1');
   });

   test('remove from Cart', async () => {

      await inventoryPage.visitPage(inventoryPageUrl);
      await inventoryPage.clickAddCartBtn();
      await inventoryPage.clickRemoveItemBtn();
      await expect(inventoryPage.cartBadge()).not.toBeVisible();
   });
});


import { test, expect } from '@playwright/test';
import {inventoryPageUrl} from '../helper/Endpoint.json';
import { username, password, baseURL,storageStatePath} from '../helper/Credentials';
import LoginPage from "../pages/login.page";

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.visitPage(baseURL);
})

test.describe('Log in process', () => {

  test('has logo', async ({ page }) => {
    await expect(page).toHaveTitle(/Swag Labs/);
  });

  test('log in process', async () => {
    await loginPage.fillLoginForm(username, password);
    await loginPage.clickLogin();
    await loginPage.urlVerification(inventoryPageUrl);
  });
});
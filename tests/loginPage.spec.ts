import { test, expect } from '@playwright/test';
import { inventoryPageUrl, storageStatePath } from '../Helper/utils';
import LoginPage from "../pages/login.page";
import { username, password, baseURL } from '../Helper/utilsTest';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.visitPage(baseURL);
})

test.describe('Log in proccess', () => {

  test('has logo', async ({ page }) => {
    await expect(page).toHaveTitle(/Swag Labs/);
  });

  test('login and save session', async ({ page }) => {
    await loginPage.fillLoginForm(username, password);
    await loginPage.clickLogin();
    await loginPage.urlVerification(inventoryPageUrl);
    await page.context().storageState({ path: storageStatePath })
  });
});
import { test, expect } from '@playwright/test';
import { inventoryPageUrl, storageStatePath} from './utils';
import LoginPage from "./support/pages/login.page";
import { username, password, baseURL } from './utilsTest';

test.beforeEach(async ({page})=>{
  await page.goto(baseURL);
})

test('has logo', async ({ page }) => {
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('login and save session', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.fillLoginForm(username, password);
  await loginPage.clickLogin();
  await loginPage.urlVerification(inventoryPageUrl);
  await page.context().storageState({path: storageStatePath})
});

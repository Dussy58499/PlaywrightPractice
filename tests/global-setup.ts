import { chromium } from '@playwright/test';
import { password, username, baseURL, storageStatePath } from '../helper/Credentials.ts';
import LoginPage from "../pages/login.page.ts";

async function globalSetup() {
  let loginPage: LoginPage;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  loginPage = new LoginPage(page);

  await loginPage.visitPage(baseURL);
  await loginPage.fillLoginForm(username, password);
  await loginPage.clickLogin();

  // Save storage state
  await page.context().storageState({ path: storageStatePath });
  await browser.close();
}

export default globalSetup;

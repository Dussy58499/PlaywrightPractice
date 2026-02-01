import { expect, Page } from "@playwright/test";
import playwrightConfig from "../playwright.config";

export abstract class CommonPage {
    page: Page
    constructor(page: Page) {
        this.page = page;
    }

    urlVerification = async (url: any) => {
        expect(this.page.url()).toBe(playwrightConfig.use?.baseURL + url);
    }

    visitPage = async (url: any) => {
        await this.page.goto(url);
    }
}

import { expect, Page } from "@playwright/test";
import { inventoryPageUrl, mainPageUrl } from "../../utils";
import playwrightConfig from "../../../playwright.config";
import { baseURL } from "../../utilsTest";

export abstract class CommonPage {
    page: Page
    constructor(page: Page) {
        this.page = page;
    }

    urlVerification = async (url: string) => {
        expect(this.page.url()).toBe(playwrightConfig.use?.baseURL + url);
    }

    visitPage = async (url: string) => {
        await this.page.goto(url);
    }
}

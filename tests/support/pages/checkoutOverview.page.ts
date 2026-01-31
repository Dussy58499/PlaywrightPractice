import { checkoutCompletePageUrl } from "../../utils";
import { Page } from "@playwright/test";
import Sidebar from "./sidebar";

export default class CheckoutOverviewPage extends Sidebar{
    constructor(page: Page) {
        super(page);
    }

    //Locators
    finishBtn = () => this.page.locator('[data-test="finish"]');
    cancelBtn = () => this.page.locator('[data-test="cancel"]');

    //Actions
    clickFinishBtn = async () => {
        await this.finishBtn().click();
    }

    clickCancelBtn = async () => {
        await this.cancelBtn().click();
    }
}

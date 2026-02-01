import { Page } from "@playwright/test";
import Sidebar from "./sidebar";

export default class CheckoutPage extends Sidebar{
    constructor(page: Page) {
        super(page);
    }

    firstnameInput = () => this.page.locator('[data-test="firstName"]');
    lastnameInput = () => this.page.locator('[data-test="lastName"]');
    postalCodeInput = () => this.page.locator('[data-test="postalCode"]');
    continueBtn = () => this.page.locator('[data-test="continue"]');
    cancelBtn = () => this.page.locator('[data-test="cancel"]');
    errorMessage = () => this.page.locator('[data-test="error"]');

    fillCheckoutForm = async (firstName :string, lastName :string, postalCode :string) => {
        await this.firstnameInput().fill(firstName);
        await this.lastnameInput().fill(lastName);
        await this.postalCodeInput().fill(postalCode);
    }

    clickContinueBtn = async () => {
        await this.continueBtn().click();
    }

    clickCancelBtn = async () => {
        await this.cancelBtn().click();
    }
}

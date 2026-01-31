import { Page } from "@playwright/test";
import { inventoryPageUrl } from "../../utils";
import Sidebar from "./sidebar";

export default class InvetoryPage extends Sidebar{
    constructor(page: Page) {
        super(page);
    }

    //Locators
    itemName = () => this.page.locator('[data-test="inventory-item-name"]')
    itemPrice = () => this.page.locator('[data-test="inventory-item-price"]')
    addToCartBtn = () => this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
    removeItemBtn = () => this.page.locator('[data-test="remove-sauce-labs-backpack"]')

    //Actions

    clickAddCartBtn = async () => {
        await this.addToCartBtn().click();
    }

    clickRemoveItemBtn = async () => {
        await this.removeItemBtn().click();
    }
}
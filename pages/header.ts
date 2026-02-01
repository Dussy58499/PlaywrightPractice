import { Page } from "@playwright/test";
import { CommonPage } from "./common";

export default class Header extends CommonPage{
    constructor(page: Page) {
        super(page);
    }

    cartIcon = () => this.page.locator('[data-test="shopping-cart-link"]');
    cartBadge = () => this.page.locator('[data-test="shopping-cart-badge"]')
    sidebarBtn = () => this.page.locator('#react-burger-menu-btn');

    clickCartBtn = async () => {
        await this.cartIcon().click();
    }

    clickSidebarBtn = async () => {
        await this.sidebarBtn().click();
    }

    getCartBadge = async () => {
        await this.cartBadge().textContent();
    }
}
import { cartPageUrl } from "../../utils";
import { Page } from "@playwright/test";
import Sidebar from "./sidebar";

export default class Cartpage extends Sidebar{
   constructor(page: Page) {
      super(page);
   }

   //Locators
   continueShoppingBtn = () => this.page.locator('[data-test="continue-shopping"]');
   checkoutBtn = () => this.page.locator('[data-test="checkout"]');
   cartTitle = () => this.page.locator('[data-test="title"]')
   itemQuantity = () => this.page.locator('[data-test="item-quantity"]');

   //Actions

   clickContinueShoppingBtn = async () => {
      await this.continueShoppingBtn().click();
   }

   clickCheckoutBtn = async () => {
      await this.checkoutBtn().click();
   }

   getCartTitle = async () => {
      await this.cartTitle().textContent();
   }

   getItemQuantity = async () => {
      await this.itemQuantity().textContent();
   }
}
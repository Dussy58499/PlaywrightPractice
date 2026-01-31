import { Page } from "@playwright/test";
import Header from "./header";

export default class Sidebar extends Header{
    constructor(page: Page) {
        super(page);
    }
    
     //Locators
     allItemsBtn = () => this.page.locator('[data-test="inventory-sidebar-link"]');
     aboutBtn = () => this.page.locator('[data-test="about-sidebar-link"');
     logoutBtn = () => this.page.locator('[data-test="logout-sidebar-link"]');
     resetAppStateBtn = () => this.page.locator('[data-test="reset-sidebar-link"]');

     //Actions
     clickAllItemsBtn = async() => {
        await this.allItemsBtn().click();
     }

     clickAboutBtn = async() =>{
        await this.aboutBtn().click();
     }

      clickLogoutBtn = async() =>{
        await this.logoutBtn().click();
     }

      clickResetAppStateBtn = async() =>{
        await this.resetAppStateBtn().click();
     }
 }
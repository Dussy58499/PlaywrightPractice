const {expect} = require('@playwright/test')
import { Page } from "@playwright/test";
import {inventoryPageUrl, mainPageUrl} from "../../utils";
import Sidebar from "./sidebar";

export default class LoginPage extends Sidebar{
    constructor(page: Page){
        super(page);
    }
    
    //Locators
    inputUsername = () => this.page.getByPlaceholder("Username");
    inputPassword = () => this.page.getByPlaceholder("Password");
    loginBtn = () => this.page.locator("#login-button");

    //Actions

    clickLogin = async () => {
        await this.loginBtn().click();
    }

    fillLoginForm = async (username: string, password: string) => {
        await this.inputUsername().fill(username);
        await this.inputPassword().fill(password);
    }
}
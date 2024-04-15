// LoginPage.ts
import { Page, expect } from '@playwright/test';

export default class LoginPage {
    private page: Page;

    // Constructor to initialize the page object
    constructor(page: Page) {
        this.page = page;
    }

    // Method to fill in the username and password fields and click the login button
    async login(username: string, password: string): Promise<void> {
        // Fill in the username field with the provided username
        await this.page.fill('#user-name', username);
        // Fill in the password field with the provided password
        await this.page.fill('#password', password);
        // Click the login button
        await this.page.click('#login-button');
    }

    async validateLoginLogoText(expectedText: string): Promise<void> {
        await this.page.waitForSelector('#login_logo');
        const loginLogoElement = await this.page.$('#login_logo');
        const loginLogoText = await loginLogoElement?.textContent();
        expect(loginLogoText).toContain(expectedText);
    }
}
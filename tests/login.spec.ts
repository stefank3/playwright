// LoginTest.ts
import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test('User can log in successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    loginPage.validateLoginLogoText

    // Navigate to the website URL
    await page.goto('https://www.saucedemo.com/');

    // Login with the provided credentials
    await loginPage.login('standard_user', 'secret_sauce');

    // Add assertions to verify login success
    const url = await page.url();
    expect(url).toContain('/inventory.html');
});
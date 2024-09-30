import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import users from '../data/loginData.json'; // Import user data from the JSON file

// Loop through each user in the imported JSON data
users.forEach(({ username, password, expectedOutcome }: { username: string, password: string, expectedOutcome: string }) => {
    // Define a test for each user scenario
    test(`Login test for user: ${username}`, async ({ page }) => {
        // Initialize the LoginPage object
        const loginPage = new LoginPage(page);

        // Navigate to the login page of the application
        await page.goto('https://www.saucedemo.com/');

        // Perform the login action using the credentials from the current iteration of the JSON data
        await loginPage.login(username, password);

        // Check the expected outcome based on the provided 'expectedOutcome' in the JSON data
        if (expectedOutcome === 'success') {
            // For a successful login, verify that the URL contains '/inventory.html'
            const url = await page.url();
            expect(url).toContain('/inventory.html');
        } else if (expectedOutcome === 'locked_out') {
            // For a locked-out user, verify that the error message is as expected
            const errorMessage = await page.locator('[data-test="error"]').textContent();
            expect(errorMessage).toContain('Sorry, this user has been locked out.');
        } else if (expectedOutcome === 'failure') {
            // For invalid login attempts, verify that the error message indicates failure
            const errorMessage = await page.locator('[data-test="error"]').textContent();
            expect(errorMessage).toContain('Username and password do not match any user in this service');
        }
    });
});
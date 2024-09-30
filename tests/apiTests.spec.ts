import { test, expect } from '@playwright/test';
import ApiHelper from '../utils/apiHelper.ts';

test.describe('API Tests with Playwright', () => {
  
  test('Successful login via API', async ({ request }) => {
    const apiHelper = new ApiHelper(request);

    // Perform a login using the API
    const response = await apiHelper.login('emilys', 'emilyspass');
    expect(response.status()).toBe(200);
    
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('token');
    expect(responseBody.username).toBe('emilys');
  });

  test('Unsuccessful login via API', async ({ request }) => {
    const apiHelper = new ApiHelper(request);

    // Attempt to login with incorrect credentials
    const response = await apiHelper.login('invalid_user', 'wrong_password');
    expect(response.status()).toBe(400);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('message');
    expect(responseBody.message).toBe('Invalid credentials');
  });

  test('Reset password via API (mocked example)', async ({ request }) => {
    const apiHelper = new ApiHelper(request);

    // Attempt to reset the password (mocked)
    const response = await apiHelper.resetPassword('user@example.com');
    expect(response.status()).toBe(404); // Expected to fail as it is a mocked example
  });
});
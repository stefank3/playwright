import { APIRequestContext } from '@playwright/test';

export default class ApiHelper {
  private request: APIRequestContext;
  private baseUrl: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = 'https://dummyjson.com'; // Base URL for API requests
  }

  // Method to log in using API
  async login(username: string, password: string) {
    const response = await this.request.post(`${this.baseUrl}/auth/login`, {
      data: {
        username: username,
        password: password,
      },
    });
    return response;
  }

  // Method to simulate password reset (mocked example)
  async resetPassword(email: string) {
    const response = await this.request.post(`${this.baseUrl}/users/reset-password`, {
      data: { email: email },
    });
    return response;
  }
}
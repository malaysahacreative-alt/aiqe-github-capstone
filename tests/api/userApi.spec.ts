import { test, expect } from '@playwright/test';
import { GitHubService } from '../../src/services/GitHubService';
import { env } from '../../config/env';

test('Validate authenticated GitHub user', async ({ request }) => {

    console.log('User:', env.userId);
    console.log('Token Exists:', !!env.token);
    console.log('API URL:', env.apiBaseUrl);
    const githubService =
        new GitHubService(request);

    const response =
        await githubService.getAuthenticatedUser();
    console.log('Status:', response.status());
    console.log('Response:', await response.text());

    expect(response.status()).toBe(200);

    const responseBody =
        await response.json();

    expect(responseBody.login).toBeTruthy();

    expect(responseBody.id).toBeTruthy();
});
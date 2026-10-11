import { test, expect } from '@playwright/test';
import { GitHubService } from '../../src/services/GitHubService';
import { env } from '../../config/env';

test.describe('GitHub User API', () => {

    test('Validate authenticated user details', async ({ request }) => {

        const githubService = new GitHubService(request);

        const response =
            await githubService.getAuthenticatedUser();

        console.log('Status Code:', response.status());

        const responseBody =
            await response.json();

        expect(response.status()).toBe(200);

        expect(responseBody.login).toBe(env.userId);

        expect(responseBody.id).toBeTruthy();

        expect(responseBody.node_id).toBeTruthy();

        expect(responseBody.html_url).toContain(
            env.userId
        );

        expect(
            response.headers()['content-type']
        ).toContain('application/json');

        console.log('User Login:', responseBody.login);
        console.log('User Id:', responseBody.id);
    });

});
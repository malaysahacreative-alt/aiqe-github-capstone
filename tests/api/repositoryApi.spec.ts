import { test, expect } from '@playwright/test';
import { GitHubService } from '../../src/services/GitHubService';
import apiData from '../../testdata/apiData.json';

test('Validate repository details', async ({ request }) => {

    const githubService =
        new GitHubService(request);

    const response =
        await githubService.getRepository(
            apiData.owner,
            apiData.repository
        );

    expect(response.status()).toBe(200);

    const responseBody =
        await response.json();

    expect(responseBody.name)
        .toBe(apiData.repository);

    expect(responseBody.owner.login)
        .toBe(apiData.owner);

    expect(responseBody.full_name)
        .toContain(apiData.repository);

    expect(responseBody.default_branch)
        .toBeTruthy();

    expect(responseBody.html_url)
        .toContain(apiData.repository);
});
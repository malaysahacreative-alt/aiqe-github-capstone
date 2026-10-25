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

// Negative scenario: GitHub should return 404 for a repository that does not exist.
test('Return 404 when requesting a non-existent repository', async ({ request }) => {
    const githubService = new GitHubService(request);
    const missingRepository = 'this-repo-should-not-exist-12345';

    const response = await githubService.getRepository(
        apiData.owner,
        missingRepository
    );

    expect(response.status()).toBe(404);

    const responseBody = await response.json();
    expect(responseBody.message).toBe('Not Found');
});

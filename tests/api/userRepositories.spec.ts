import { test, expect } from '@playwright/test';
import { GitHubService } from '../../src/services/GitHubService';

test('Validate authenticated user repositories', async ({ request }) => {

    const githubService =
        new GitHubService(request);

    const response =
        await githubService.getUserRepositories();

    expect(response.status()).toBe(200);

    const repositories =
        await response.json();

    expect(Array.isArray(repositories))
        .toBeTruthy();

    expect(repositories.length)
        .toBeGreaterThan(0);

    const capstoneRepo =
        repositories.find(
            (repo: any) =>
                repo.name === 'aiqe-github-capstone'
        );

    expect(capstoneRepo)
        .toBeDefined();
});
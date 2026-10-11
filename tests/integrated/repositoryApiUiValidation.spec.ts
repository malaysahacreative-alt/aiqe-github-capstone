import { test, expect } from '@playwright/test';
import { GitHubService } from '../../src/services/GitHubService';
import { RepositoryPage } from '../../src/pages/RepositoryPage';

test('Validate repository through API and UI',
async ({ request, page }) => {

    const githubService =
        new GitHubService(request);

    const apiResponse =
        await githubService.getRepository(
            'YOUR_USERNAME',
            'aiqe-github-capstone'
        );

    expect(apiResponse.status()).toBe(200);

    const repository =
        await apiResponse.json();

    const repositoryPage =
        new RepositoryPage(page);

    await page.goto(repository.html_url);

    await repositoryPage.validateRepositoryName(
        repository.name
    );

    await repositoryPage.validateUrlContains(
        repository.name
    );
});
import { test } from '@playwright/test';
import { RepositoryPage } from '../../src/pages/RepositoryPage';
import uiData from '../../testdata/uiData.json';

test('Validate dedicated repository', async ({ page }) => {

    const repositoryPage = new RepositoryPage(page);

    await page.goto(
    `https://github.com/${uiData.repositoryOwner}/${uiData.repositoryName}`
    );

    await repositoryPage.validateRepositoryName(
    uiData.repositoryName
    );

    await repositoryPage.validateUrlContains(
    uiData.repositoryName
    );

    await repositoryPage.validateCodeTabVisible();
});
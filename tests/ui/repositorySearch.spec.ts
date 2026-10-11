import { test, expect } from '@playwright/test';
import { GitHubHomePage } from '../../src/pages/GitHubHomePage';

test('Validate GitHub repository search', async ({ page }) => {

  const homePage = new GitHubHomePage(page);

  await homePage.openHomePage();

  await homePage.searchRepository('microsoft/playwright');

  await expect(page).toHaveURL(/search/);
});
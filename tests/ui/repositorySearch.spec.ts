import { test, expect } from '@playwright/test';
import { GitHubHomePage } from '../../src/pages/GitHubHomePage';

test('Validate GitHub repository search', async ({ page }) => {

  const homePage = new GitHubHomePage(page);

  await homePage.openHomePage();

  await expect(page).toHaveURL(/github\.com/);
  await expect(page).toHaveTitle(/GitHub/i);

  await homePage.searchRepository('microsoft/playwright');

  await expect(page).toHaveURL(/search/);
});

// Negative scenario: searching for a unique, non-existent repository should
// show GitHub's no-results state rather than a repository result.
test('Show no results for a non-existent repository search', async ({ page }) => {
  const homePage = new GitHubHomePage(page);
  const missingRepository = 'this-repo-should-not-exist-12345';

  await homePage.openHomePage();
  await homePage.searchRepository(missingRepository);

  await expect(page).toHaveURL(/github\\.com\\/search/);
  await expect(
    page.getByText(/couldn.t find any repositories matching/i)
  ).toBeVisible();
});

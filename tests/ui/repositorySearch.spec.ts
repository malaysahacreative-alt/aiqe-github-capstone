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
// return the search page without a link to that repository. Avoid asserting
// GitHub's exact no-results sentence because its wording can change.
test('Show no results for a non-existent repository search', async ({ page }) => {
  const homePage = new GitHubHomePage(page);
  const missingRepository = 'this-repo-should-not-exist-12345';

  await homePage.openHomePage();
  await homePage.searchRepository(missingRepository);

  await expect(page).toHaveURL(/\/search/);
  await expect(page.locator('main')).toBeVisible();

  // If GitHub accidentally returns a repository result, this link will exist.
  await expect(
    page.locator(`main a[href="/${missingRepository}"]`)
  ).toHaveCount(0);
});

import { test } from '@playwright/test';
import { RepositoryPage } from '../../src/pages/RepositoryPage';

test(
  'Validate authenticated user can access capstone repository',
  async ({ page }) => {

    const repositoryPage = new RepositoryPage(page);

    await page.goto(
      'https://github.com/malaysahacreative-alt/aiqe-github-capstone'
    );

    await repositoryPage.validateRepositoryName(
      'aiqe-github-capstone'
    );

    await repositoryPage.validateCodeTabVisible();

    await repositoryPage.validateUrlContains(
      'aiqe-github-capstone'
    );
  }
);
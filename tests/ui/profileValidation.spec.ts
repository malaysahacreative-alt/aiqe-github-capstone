import { test, expect } from '@playwright/test';

test('Validate Torvalds profile', async ({ page }) => {

  await page.goto('https://github.com/torvalds');

  await expect(page).toHaveURL(/torvalds/);

  await expect(
      page.getByRole('link', { name: /repositories/i })
  ).toBeVisible();
});
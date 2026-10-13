import { test } from '@playwright/test';

test('Generate authentication state', async ({ page }) => {

  await page.goto('https://github.com/login');

  console.log(
    'Login manually, then press Ctrl+C after saving state'
  );

  await page.pause();

  await page.context().storageState({
    path: 'playwright/.auth/user.json'
  });
});
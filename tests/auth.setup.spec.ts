import { test } from '@playwright/test';

test('Generate Authentication State', async ({ page }) => {

    await page.goto('https://github.com/login');

    console.log('Login manually');

    await page.pause();

    await page.context().storageState({
        path: 'playwright/.auth/user.json'
    });

    console.log('Authentication state stored');
});
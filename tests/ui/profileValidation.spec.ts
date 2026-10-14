import { test } from '@playwright/test';
import { ProfilePage } from '../../src/pages/ProfilePage';

test(
    'Validate public GitHub user profile information',
    async ({ page }) => {

        const profilePage =
            new ProfilePage(page);

        await profilePage.openProfile(
            'torvalds'
        );

        await profilePage.validateProfileUrl(
            'torvalds'
        );

        await profilePage.validateRepositoriesTabVisible();
    }
);
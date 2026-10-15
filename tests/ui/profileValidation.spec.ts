import { test } from '@playwright/test';
import { ProfilePage } from '../../src/pages/ProfilePage';
import uiData from '../../testdata/uiData.json';

test(
    'Validate public GitHub user profile information',
    async ({ page }) => {

        const profilePage =
            new ProfilePage(page);

        await profilePage.openProfile(uiData.userProfile);

        await profilePage.validateProfileUrl(uiData.userProfile);

        await profilePage.validateRepositoriesTabVisible();
    }
);
import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProfilePage extends BasePage {

    private readonly repositoriesTab: Locator;

    constructor(page: Page) {
        super(page);

        this.repositoriesTab = page.getByRole('link', {
            name: /repositories/i
        });
    }

    async openProfile(userName: string): Promise<void> {
    await this.navigateTo(
    `/${encodeURIComponent(userName)}`
    );
    }

    async validateProfileUrl(
    userName: string
    ): Promise<void> {
    await expect(this.page).toHaveURL(
    `https://github.com/${userName}`
        );
    }

    async validateRepositoriesTabVisible(): Promise<void> {

        await expect(
            this.repositoriesTab
        ).toBeVisible();
    }
}
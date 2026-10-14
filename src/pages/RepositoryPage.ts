import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class RepositoryPage extends BasePage {

    private readonly repositoryName: Locator;
    private readonly repositoryOwner: Locator;
    private readonly codeTab: Locator;

    constructor(page: Page) {
        super(page);

        
    this.repositoryName = page.getByTestId('repo-name-link');


        this.repositoryOwner = page.getByRole('link', {
            name: /malaysahacreative-alt/i
        });

        this.codeTab = page.getByRole('link', {
            name: /^Code$/
        });
    }

    async validateRepositoryName(
        expectedRepository: string
    ): Promise<void> {

        await expect(
            this.repositoryName
        ).toContainText(expectedRepository);
    }

    async validateRepositoryOwner(
        expectedOwner: string
    ): Promise<void> {

        await expect(
            this.repositoryOwner
        ).toContainText(expectedOwner);
    }

    async validateCodeTabVisible(): Promise<void> {

        await expect(
            this.codeTab
        ).toBeVisible();
    }

    async validateUrlContains(
        repositoryName: string
    ): Promise<void> {

        await expect(this.page).toHaveURL(
            new RegExp(repositoryName)
        );
    }
}
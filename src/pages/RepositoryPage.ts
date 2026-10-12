import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class RepositoryPage extends BasePage {

    private readonly repositoryName: Locator;
    private readonly codeTab: Locator;
    private readonly repositoryOwner: Locator;
 //   private readonly readmeSection: Locator;

    constructor(page: Page) {
    super(page);

    this.repositoryName = page.locator('strong a');

    this.repositoryOwner = page.locator('span.author a');

    this.codeTab = page.getByRole('link', {
        name: 'Code'
    });
    }

    async validateRepositoryName(expectedRepository: string): Promise<void> {
        await expect(this.repositoryName).toContainText(expectedRepository);
    }

    async validateCodeTabVisible(): Promise<void> {
        await expect(this.codeTab).toBeVisible();
    }
/*
    async validateReadmeVisible(): Promise<void> {
        await expect(this.readmeSection).toBeVisible();
    }
*/
    async validateUrlContains(repositoryName: string): Promise<void> {
        await expect(this.page).toHaveURL(new RegExp(repositoryName));
    }

    async validateRepositoryOwner(
    expectedOwner: string
): Promise<void> {

    await expect(
        this.repositoryOwner
    ).toContainText(expectedOwner);
}
}
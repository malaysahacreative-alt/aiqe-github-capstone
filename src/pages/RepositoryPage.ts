import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class RepositoryPage extends BasePage {
  private readonly repositoryHeading: Locator;

  constructor(page: Page) {
    super(page);

    this.repositoryHeading = page.locator('strong a');
  }

  async validateRepositoryName(expectedRepo: string): Promise<void> {
    await expect(this.repositoryHeading).toContainText(expectedRepo);
  }
}
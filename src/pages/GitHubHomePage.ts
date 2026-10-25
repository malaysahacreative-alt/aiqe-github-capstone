import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class GitHubHomePage extends BasePage {
  private readonly searchButton: Locator;
  private readonly searchInput: Locator;

  constructor(page: Page) {
    super(page);

    // GitHub opens its global search field from a button; the input is
    // not available for interaction until the search dialog is opened.
    this.searchButton = page.getByRole('button', {
      name: /search or jump to|search/i,
    });

    this.searchInput = page.getByPlaceholder(/search or jump to/i);
  }

  async openHomePage(): Promise<void> {
    await this.navigateTo('/');
  }

  async searchRepository(repository: string): Promise<void> {
    await expect(this.searchButton).toBeVisible();
    await this.searchButton.click();

    await expect(this.searchInput).toBeVisible();
    await this.searchInput.fill(repository);
    await this.searchInput.press('Enter');
  }
}

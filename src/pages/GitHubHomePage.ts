import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class GitHubHomePage extends BasePage {
  private readonly searchInput: Locator;

  constructor(page: Page) {
    super(page);

    this.searchInput = page.getByRole('combobox');
  }

  async openHomePage(): Promise<void> {
    await this.navigateTo('https://github.com');
  }

  async searchRepository(repository: string): Promise<void> {
    await this.searchInput.click();
    await this.searchInput.fill(repository);
    await this.searchInput.press('Enter');
  }
}
import { test, expect } from '@playwright/test';
import { GitHubService } from '../../src/services/GitHubService';
import { env } from '../../config/env';

test('Validate authenticated user repositories', async ({ request }) => {
  test.skip(!env.userId || !env.token, 'Set GITHUB_USER_ID and GITHUB_TOKEN to run authenticated API tests.');

  const response = await new GitHubService(request).getUserRepositories();
  expect(response.status()).toBe(200);
  const repositories = await response.json();
  expect(Array.isArray(repositories)).toBeTruthy();
  expect(repositories.length).toBeGreaterThan(0);
  const capstoneRepo = repositories.find((repo: { name: string }) => repo.name === 'aiqe-github-capstone');
  expect(capstoneRepo).toBeDefined();
});

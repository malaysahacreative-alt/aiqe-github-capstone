import { test, expect } from '@playwright/test';
import { GitHubService } from '../../src/services/GitHubService';
import { env } from '../../config/env';

test('Validate authenticated user details', async ({ request }) => {
  test.skip(!env.userId || !env.token, 'Set GITHUB_USER_ID and GITHUB_TOKEN to run authenticated API tests.');

  const response = await new GitHubService(request).getAuthenticatedUser();
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.login).toBe(env.userId);
  expect(body.id).toBeTruthy();
  expect(body.node_id).toBeTruthy();
  expect(body.html_url).toContain(env.userId);
  expect(response.headers()['content-type']).toContain('application/json');
});

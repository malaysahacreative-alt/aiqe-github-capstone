import * as dotenv from 'dotenv';

dotenv.config();

/**
 * Public repository tests can run without credentials.
 * Authenticated-user tests check for GITHUB_USER_ID and GITHUB_TOKEN
 * and are skipped when those values are not configured.
 */
export const env = {
  uiBaseUrl: process.env.GITHUB_UI_BASE_URL || 'https://github.com',
  apiBaseUrl: process.env.GITHUB_API_BASE_URL || 'https://api.github.com',
  userId: process.env.GITHUB_USER_ID || '',
  token: process.env.GITHUB_TOKEN || '',
  testRepo: process.env.GITHUB_TEST_REPO || '',
};

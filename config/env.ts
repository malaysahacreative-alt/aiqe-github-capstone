import * as dotenv from 'dotenv';

dotenv.config();

export const env = {
  uiBaseUrl: process.env.GITHUB_UI_BASE_URL || '',
  apiBaseUrl: process.env.GITHUB_API_BASE_URL || '',
  userId: process.env.GITHUB_USER_ID || '',
  token: process.env.GITHUB_TOKEN || '',
  testRepo: process.env.GITHUB_TEST_REPO || '',
};

if (!env.userId || !env.token) {
  throw new Error('Required environment variables are missing');
}
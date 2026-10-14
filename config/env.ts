import 'dotenv/config';

function requiredEnv(name: string): string {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}`
    );
  }

  return value;
}

export const env = {
  uiBaseUrl:
    process.env.GITHUB_UI_BASE_URL?.trim() ||
    'https://github.com',

  apiBaseUrl:
    process.env.GITHUB_API_BASE_URL?.trim() ||
    'https://api.github.com',

  userId: requiredEnv('GITHUB_USER_ID'),
  token: requiredEnv('GITHUB_TOKEN'),
  testRepo: requiredEnv('GITHUB_TEST_REPO'),
} as const;
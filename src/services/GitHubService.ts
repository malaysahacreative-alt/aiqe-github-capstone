import {
  APIRequestContext,
  APIResponse,
} from '@playwright/test';

import { env } from '../../config/env';

export class GitHubService {
  constructor(
    private readonly request: APIRequestContext
  ) {}

  private get headers(): Record<string, string> {
    return {
      Authorization: `Bearer ${env.token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    };
  }

  async getAuthenticatedUser() {
    return this.request.get(`${env.apiBaseUrl}/user`, {
      headers: this.headers,
    });
  }

  async getRepository(
    owner: string,
    repo: string
  ) {
    return this.request.get(
      `${env.apiBaseUrl}/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`,
      { headers: this.headers }
    );
  }

  async getUserRepositories() {
    return this.request.get(
      `${env.apiBaseUrl}/user/repos`,
      { headers: this.headers }
    );
  }
}
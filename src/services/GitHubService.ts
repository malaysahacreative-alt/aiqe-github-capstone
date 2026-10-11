import { APIRequestContext, APIResponse } from '@playwright/test';
import { env } from '../../config/env';

export class GitHubService {
  constructor(private request: APIRequestContext) {}

  async getAuthenticatedUser(): Promise<APIResponse> {
    return this.request.get(`${env.apiBaseUrl}/user`, {
      headers: {
        Authorization: `Bearer ${env.token}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
  }

  async getRepository(owner: string, repo: string): Promise<APIResponse> {
    return this.request.get(`${env.apiBaseUrl}/repos/${owner}/${repo}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
  }

  async getUserRepositories(): Promise<APIResponse> {
    return this.request.get(`${env.apiBaseUrl}/user/repos?per_page=100`, {
      headers: {
        Authorization: `Bearer ${env.token}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
  }
}

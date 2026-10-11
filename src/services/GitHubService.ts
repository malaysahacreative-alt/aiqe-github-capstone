import { APIRequestContext, APIResponse } from '@playwright/test';
import { env } from '../../config/env';

export class GitHubService {

    constructor(private request: APIRequestContext) {}

    async getAuthenticatedUser() {

    return await this.request.get(
        `${env.apiBaseUrl}/user`,
        {
            headers: {
                Authorization: `Bearer ${env.token}`,
                Accept: 'application/vnd.github+json',
                'X-GitHub-Api-Version': '2022-11-28'
            }
        }
    );
}
}
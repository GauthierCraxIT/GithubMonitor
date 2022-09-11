import { PullRequestResponse } from '../Models/PullRequest';

export const MapPullRequests = (pullRequests: PullRequestResponse[]) => {
  return pullRequests.map(pullRequest => (
    {
      ...pullRequest,
    }
  ));
}
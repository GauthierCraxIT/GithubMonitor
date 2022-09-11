import { PullRequestResponse } from '../Models/PullRequest';

export const MapPullRequests = (pullRequests: PullRequestResponse[]) => {
  return pullRequests.map(pullRequest => (
    {
      id: pullRequest.id,
      url: pullRequest.url,
      state: pullRequest.state,
      title: pullRequest.title,
      locked: pullRequest.locked,
      number: pullRequest.number,
      repoName: pullRequest.head.repo.name,
      comments: pullRequest.comments ?? [],
    }
  ));
}
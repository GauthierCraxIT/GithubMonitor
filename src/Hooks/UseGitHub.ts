import { Repository } from '../Models/Repository';
import create from 'zustand';
import { Octokit } from "octokit";
import { MapRepositories } from '../Mappers/RepositoryMapper';
import { PullRequest } from '../Models/PullRequest';
import { MapPullRequests } from '../Mappers/PullRequestMapper';

const octokit = new Octokit({
  auth: process.env.TOKEN,
});

interface GitHubStore {
  repositories?: Repository[] | null
  pullRequests?: PullRequest[] | null
  isLoading: boolean
  
  fetchRepositories: () => void
  fetchPullRequests: (owner: string, repo: string) => void
};

export const useGitHub = create<GitHubStore>((set) => ({
  isLoading: false,

  fetchRepositories: async () => {
    set((state: GitHubStore) => ({ ...state, isLoading: true }));
    const { data } = await octokit.request("GET /users/{username}/repos", { username: 'gauthiercraxit' });
    set((state: GitHubStore) => ({ ...state, isLoading: false, repositories: MapRepositories(data) }));
  },

  fetchPullRequests: async (owner, repo) => {
    set((state: GitHubStore) => ({ ...state, isLoading: true }));
    const { data } = await octokit.request("GET /repos/{owner}/{repo}/pulls", { owner, repo });
    set((state: GitHubStore) => ({ ...state, isLoading: false, pullRequests: MapPullRequests(data) }));
  },
}))

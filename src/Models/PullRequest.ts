import { Comment } from './Comment';


interface PullRequestBase {
  id: number,
  number: number,
  url: string,
  state: string,
  title: string,
  locked: boolean,
  comments?: Comment[]
}

interface Head {
  repo: Repo
}

interface Repo {
  name: string
}

export interface PullRequest extends PullRequestBase {
  repoName: string
}

export interface PullRequestResponse extends PullRequestBase {
  head: Head,
}
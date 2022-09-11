

interface PullRequestBase {
  id: number,
  url: string,
  state: string,
  title: string,
  locked: boolean,
}

export interface PullRequest extends PullRequestBase {

}

export interface PullRequestResponse  extends PullRequestBase {
}
import { FC, useEffect, useState } from 'react';
import { Repository } from '../Models/Repository';
import { useGitHub } from '../Hooks/UseGitHub';
import { RepositoryDetails } from './RepositoryDetails';

export interface ReponsitoryListProps {
  repositories: Repository[]
}

export const RepositoryList: FC<ReponsitoryListProps> = ({ repositories }) => {
  const [selectedRepositoryId, setSelectedRepositoryId] = useState<number>(-1);

  const {
    pullRequests,
    fetchPullRequests,
  } = useGitHub();

  useEffect(() => {
    if (repositories && repositories.length > 0) {
      repositories.forEach(repo => fetchPullRequests(repo.owner, repo.name))
    }
  }, [repositories]);

  const findPullRequestsByRepo = (repoName: string) => {
    return pullRequests?.filter(pr => pr.repoName === repoName) ?? [];
  };

  return (
    <>
      {repositories.map(repo => (
        <RepositoryDetails
          key={repo.id}
          expanded={selectedRepositoryId === repo.id}
          repository={repo}
          pullRequests={findPullRequestsByRepo(repo.name)}
          onChange={() => selectedRepositoryId === repo.id ? setSelectedRepositoryId(-1) : setSelectedRepositoryId(repo.id)}
          />
      ))
      }
    </>
  )
};

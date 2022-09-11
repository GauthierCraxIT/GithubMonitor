import { FC, useEffect } from 'react';
import { RepositoryList } from '../../Components/RepositoryList';
import { useGitHub } from '../../Hooks/UseGitHub';

export const HomePage: FC = () => {
  const {
    repositories,
    fetchRepositories,
  } = useGitHub();

  useEffect(() => {
    fetchRepositories();
  }, []);

  return (
    <>
      <h1>Github Monitor</h1>
      <RepositoryList repositories={repositories ?? []} />
      <button onClick={() => fetchRepositories()}>FETCH REPOS</button>
    </>
  )
};

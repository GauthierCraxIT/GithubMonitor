import { RepositoryResponse } from '../Models/Repository';

export const MapRepositories = (repositories: RepositoryResponse[]) => {
  return repositories.map(repo => (
    {
      id: repo.id,
      name: repo.name,
      fullName: repo.full_name,
      owner: repo.owner.login
    }
  ));
}
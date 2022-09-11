
interface RepositoryBase {
  id: number
  name: string
}

interface Owner {
  login: string
}

export interface Repository extends RepositoryBase {
  fullName: string
  owner: string
}

export interface RepositoryResponse extends RepositoryBase {
  full_name: string
  owner: Owner
}
export type StoreState = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  resetSearchTerm: () => void;
};

export type SearchParams = {
  username: string | undefined;
};

export type User = {
  login: string;
  avatarUrl: string;
};

export type Repository = {
  name: string;
  url: string;
  description: string;
  stargazerCount: number;
};

export type Edge<N> = {
  node: N;
  cursor: string;
};

export type UserWithRepositories = User & {
  repositories: Repository[];
};

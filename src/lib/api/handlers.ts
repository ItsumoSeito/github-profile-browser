import { getAllUserRepositories, getUsers } from './data';
import { UserWithRepositories } from '../types';

export function handleResultStatus(result: Response) {
  switch (result.status) {
    case 401:
      throw new Error('You are not authorized to access this resource');
    case 403:
      throw new Error('This resource is forbidden');
    case 404:
      throw new Error('This resource was not found');
  }
}

export async function getUsersWithRepositories(searchTerm: string) {
  const usersWithRepositories: UserWithRepositories[] = [];
  const users = await getUsers(searchTerm);
  await Promise.all(
    users.map(async user => {
      const userRepositories = await getAllUserRepositories(user.login);
      usersWithRepositories.push({
        ...user,
        repositories: userRepositories,
      });
    })
  );
  return usersWithRepositories;
}

export function authorizeHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
}

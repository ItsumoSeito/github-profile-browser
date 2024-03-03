import { Repository, User } from '../types';
import { extractDataFromNode } from '../utils';
import { handleResultStatus } from './handlers';

const NO_OF_REPOSITORY_RESULTS = 100;

const defaultHeaders = {
  'User-Agent': 'itsumoseito',
  Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
  'Content-Type': 'application/json',
};

export async function getUsers(searchTerm: string): Promise<User[]> {
  let result: undefined | Response;
  try {
    result = await fetch(process.env.GITHUB_API_GRAPHQL_URL as string, {
      method: 'POST',
      headers: defaultHeaders,
      body: JSON.stringify({
        query: `
      {
        search(query: "${searchTerm} in:login", type: USER, first: 5) {
        edges {
            node {
              ... on User {
                login
                avatarUrl
              }
            }
          }
        }
      }
    `,
      }),
    });
  } catch {
    throw new Error('Failed to fetch users');
  }
  handleResultStatus(result);
  const {
    data: {
      search: { edges: users },
    },
  } = await result.json();
  return extractDataFromNode<User>(users);
}

export async function getAllUserRepositories(
  username: string
): Promise<Repository[]> {
  let repositories: Repository[] = [];
  let cursor: string | undefined;
  let result: undefined | Response;
  let runs = 0;
  while (true) {
    try {
      runs++;
      result = await fetch(process.env.GITHUB_API_GRAPHQL_URL as string, {
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify({
          query: `
      {
        search(query: "user:${username}", type:REPOSITORY, first: ${NO_OF_REPOSITORY_RESULTS}${
            cursor ? `, after: "${cursor}"` : ''
          }) {
        edges {
            node {
              ... on Repository {
                name
                description 
                stargazerCount
                url
              }
            }
            cursor
          }
        }
      }
    `,
        }),
      });
    } catch {
      throw new Error('Failed to fetch user repositories');
    }
    handleResultStatus(result);
    const {
      data: {
        search: { edges: repos },
      },
    } = await result.json();
    repositories.push(...extractDataFromNode<Repository>(repos));
    if (repos.length < NO_OF_REPOSITORY_RESULTS || repos.length === 0) {
      break;
    }
    cursor = repos[repos.length - 1].cursor;
  }
  return repositories;
}

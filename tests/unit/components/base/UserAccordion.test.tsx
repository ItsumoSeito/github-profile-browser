import { test, vi } from 'vitest';
import { render } from '@testing-library/react';
import UserAccordion from '@/components/base/UserAccordion';

const usersWithRepos = [
  {
    login: 'testlogin',
    avatarUrl: 'https://example.com',
    repositories: [
      {
        name: 'testname',
        description: 'testdescription',
        stargazerCount: 1,
        url: 'https://example.com',
      },
    ],
  },
];

test('UserAccordion smoke test', () => {
  render(<UserAccordion usersWithRepos={usersWithRepos} />);
});

import { test, vi } from 'vitest';
import { render } from '@testing-library/react';
import SearchResultsContent from '@/components/base/SearchResultsContent';
import * as apiHandlersModule from '@/lib/api/handlers';

vi.mock('@/lib/api/handlers', async importOriginal => {
  const original = await importOriginal<typeof apiHandlersModule>();
  return {
    ...original,
    getUsersWithRepositories: async (searchTerm: string) => [
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
    ],
  };
});

test('SearchResultsContent smoke test', async () => {
  const comp = await SearchResultsContent({ searchTerm: 'abc' });
  render(comp);
});

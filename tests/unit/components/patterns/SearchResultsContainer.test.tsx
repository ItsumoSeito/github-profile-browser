import { test, vi } from 'vitest';
import { render } from '@testing-library/react';
import SearchResultsContainer from '@/components/patterns/SearchResultsContainer';

// Mock the SearchResultsContent component since it is an async server component too and we can't really await it
vi.mock('@/components/base/SearchResultsContent', async () => {
  return {
    default: () => <div>SearchResultsContent</div>,
  };
});

const searchParams = {
  username: 'testusername',
};

test('SearchResultsContainer smoke test', async () => {
  const comp = await SearchResultsContainer({ searchParams });
  render(comp);
});

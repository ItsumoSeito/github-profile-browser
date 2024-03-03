import { test, vi } from 'vitest';
import { render } from '@testing-library/react';
import SearchButton from '@/components/base/SearchButton';
import nextNavigationModule from 'next/navigation';

vi.mock('next/navigation', async importOriginal => {
  const original = await importOriginal<typeof nextNavigationModule>();
  return {
    ...original,
    useRouter: () => ({
      replace: vi.fn(),
    }),
  };
});

test('SearchButton smoke test', () => {
  render(<SearchButton />);
});

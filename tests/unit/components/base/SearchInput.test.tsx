import { test, vi } from 'vitest';
import { render } from '@testing-library/react';
import nextNavigationModule from 'next/navigation';
import SearchInput from '@/components/base/SearchInput';

vi.mock('next/navigation', async importOriginal => {
  const original = await importOriginal<typeof nextNavigationModule>();
  return {
    ...original,
    useRouter: () => ({
      replace: vi.fn(),
    }),
  };
});

test('SearchInput smoke test', () => {
  render(<SearchInput />);
});

import { test, vi } from 'vitest';
import { render } from '@testing-library/react';
import GitHubLink from '@/components/base/GithubLink';

vi.mock('next/navigation', importOriginal => {
  return {
    ...importOriginal(),
    useRouter: () => ({
      push: vi.fn(),
    }),
  };
});

test('GitHubLink smoke test', () => {
  render(<GitHubLink url="abc" />);
});

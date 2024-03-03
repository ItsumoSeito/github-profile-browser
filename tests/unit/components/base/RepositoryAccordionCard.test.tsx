import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import RepositoryAccordionCard from '@/components/base/RepositoryAccordionCard';
import { Repository } from '@/lib/types';
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

test('RepositoryAccordionCard smoke test', () => {
  const repo: Repository = {
    name: 'testname',
    description: 'testdescription',
    stargazerCount: 1,
    url: 'https://example.com',
  };
  render(<RepositoryAccordionCard repository={repo} />);
  const name = screen.getByRole('heading');
  const description = screen.getByText('testdescription');
  const stargazerCount = screen.getByText('1');
  const button = screen.getByText('Open');

  expect(name.textContent).toEqual('testname');
  expect(description.textContent).toEqual('testdescription');
  expect(stargazerCount.textContent).toEqual('1');
  expect(button).toBeDefined();
});

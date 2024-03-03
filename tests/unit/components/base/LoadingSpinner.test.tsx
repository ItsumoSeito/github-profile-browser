import { test } from 'vitest';
import { render } from '@testing-library/react';
import LoadingSpinner from '@/components/base/LoadingSpinner';

test('LoadingSpinner smoke test', () => {
  render(<LoadingSpinner />);
});

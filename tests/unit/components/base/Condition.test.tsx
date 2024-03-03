import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Condition from '@/components/base/Condition';

test('Condition smoke test', () => {
  render(
    <Condition condition={true}>
      <p>Test</p>
    </Condition>
  );
  expect(screen.getByText('Test')).toBeDefined();
});

import { Edge, User } from '@/lib/types';
import { extractDataFromNode } from '@/lib/utils';
import { describe, expect, test } from 'vitest';

describe('extractDataFromNode', () => {
  test('extracts only defined data from nodes', () => {
    const edges: Edge<User>[] = [
      { node: { login: 'John', avatarUrl: 'abc' }, cursor: 'abc' },
      { node: {} as User, cursor: 'abc' },
    ];
    const result = extractDataFromNode(edges);
    expect(result).toEqual([{ login: 'John', avatarUrl: 'abc' }]);
  });
});

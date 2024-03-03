import { handleResultStatus } from '@/lib/api/handlers';
import { describe, expect, test } from 'vitest';

describe('handleResultStatus', () => {
  test('throw the correct error for a 401 status', () => {
    expect(handleResultStatus.bind(null, { status: 401 } as Response)).toThrow(
      'You are not authorized to access this resource'
    );
  });
  test('throw the correct error for a 403 status', () => {
    expect(handleResultStatus.bind(null, { status: 403 } as Response)).toThrow(
      'This resource is forbidden'
    );
  });
  test('throw the correct error for a 404 status', () => {
    expect(handleResultStatus.bind(null, { status: 404 } as Response)).toThrow(
      'This resource was not found'
    );
  });
});

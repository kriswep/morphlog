/* globals test expect */

import { requiresAuth } from './permissions';

test('requiresAuth should not throw if authenticated', async () => {
  const user = { sub: 3 };

  expect(requiresAuth.bind(null, '', '', { user })).not.toThrow();
});

test('requiresAuth should throw if not authenticated', async () => {
  const user = {};

  expect(requiresAuth.bind(null, '', '', { user })).toThrow(
    'Not authenticated',
  );
});

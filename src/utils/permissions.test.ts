/* globals test expect */
import { requiresAuth } from './permissions';
import * as jwt from 'jsonwebtoken';

test('requiresAuth should not throw if authenticated with token', async () => {
  const auth = jwt.sign({ userId: 1 }, process.env.APP_SECRET);

  const userId = requiresAuth('', '', {
    request: { get: () => auth },
  });
  expect(userId).toBe(1);
});

test('requiresAuth should throw if trying to authenticate with false token', async () => {
  const invalidTokenAuth = jwt.sign({ userId: 1 }, 'malicious secret');

  expect(
    requiresAuth.bind(null, '', '', {
      request: { get: () => invalidTokenAuth },
    }),
  ).toThrow('Not Authenticated');
  expect(
    requiresAuth.bind(null, '', '', { request: { get: () => 'malformedJWT' } }),
  ).toThrow('Not Authenticated');
});

test('requiresAuth should throw if not authenticated', async () => {
  const user = {};

  expect(
    requiresAuth.bind(null, '', '', { request: { get: () => {} } }),
  ).toThrow('Not Authenticated');
});

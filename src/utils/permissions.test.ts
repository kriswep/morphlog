/* globals test expect */
import {
  requiresAuth,
  requiresProjectAccess,
  requiresTeamAccess,
} from './permissions';
import * as jwt from 'jsonwebtoken';

test('requiresAuth should not throw if authenticated with token', () => {
  const auth = jwt.sign({ userId: 1 }, process.env.APP_SECRET);

  const userId = requiresAuth('', '', {
    request: { get: () => auth },
  });
  expect(userId).toBe(1);
});

test('requiresAuth should throw if trying to authenticate with false token', () => {
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

test('requiresAuth should throw if not authenticated', () => {
  const user = {};

  expect(
    requiresAuth.bind(null, '', '', { request: { get: () => {} } }),
  ).toThrow('Not Authenticated');
});

test('requiresProjectAccess should allow if authenticated and project member', async () => {
  const auth = jwt.sign({ userId: 1 }, process.env.APP_SECRET);

  const access = await requiresProjectAccess(
    '',
    { projectId: 2 },
    {
      request: { get: () => auth },
      db: { exists: { Project: () => true } },
    },
  );
  expect(access).toBeTruthy();
});

test('requiresProjectAccess should throw if authenticated and wrong project member', async () => {
  const auth = jwt.sign({ userId: 1 }, process.env.APP_SECRET);

  let message;
  try {
    await requiresProjectAccess(
      '',
      { id: 2 },
      {
        request: { get: () => auth },
        db: { exists: { Project: async () => false } },
      },
    );
  } catch (error) {
    message = error.message;
  }
  expect(message).toBe('No Access');
});

test('requiresProjectAccess should throw if authenticated without projectID', async () => {
  const auth = jwt.sign({ userId: 1 }, process.env.APP_SECRET);

  let message;
  try {
    await requiresProjectAccess(
      '',
      {}, // no projectId nor id
      {
        request: { get: () => auth },
        db: { exists: { Project: async () => true } },
      },
    );
  } catch (error) {
    message = error.message;
  }
  expect(message).toBe('No Access');
});

test('requiresTeamAccess should allow if authenticated and project member', async () => {
  const auth = jwt.sign({ userId: 1 }, process.env.APP_SECRET);

  const access = await requiresTeamAccess(
    '',
    { teamId: 2 },
    {
      request: { get: () => auth },
      db: { exists: { Team: () => true } },
    },
  );
  expect(access).toBeTruthy();
});

test('requiresTeamAccess should throw if authenticated and not in team', async () => {
  const auth = jwt.sign({ userId: 1 }, process.env.APP_SECRET);

  let message;
  try {
    await requiresTeamAccess(
      '',
      { id: 2 },
      {
        request: { get: () => auth },
        db: { exists: { Team: async () => false } },
      },
    );
  } catch (error) {
    message = error.message;
  }
  expect(message).toBe('No Access');
});

test('requiresTeamAccess should throw if authenticated without teamId', async () => {
  const auth = jwt.sign({ userId: 1 }, process.env.APP_SECRET);

  let message;
  try {
    await requiresTeamAccess(
      '',
      {}, // no teamId nor id
      {
        request: { get: () => auth },
        db: { exists: { Team: async () => true } },
      },
    );
  } catch (error) {
    message = error.message;
  }
  expect(message).toBe('No Access');
});

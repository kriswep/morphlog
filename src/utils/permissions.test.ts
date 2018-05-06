/* globals test expect */
import {
  requiresAuth,
  requiresProjectAccess,
  requiresTeamReadAccess,
  requiresTeamWriteAccess,
} from './permissions';
import * as jwt from 'jsonwebtoken';

test('requiresAuth should not throw if authenticated with token', async () => {
  const auth = jwt.sign({ userId: 1 }, process.env.APP_SECRET);

  const userId = await requiresAuth('', '', {
    request: { get: () => auth },
    db: { exists: { User: () => true } },
  });
  expect(userId).toBe(1);
});

test('requiresAuth should throw if trying to authenticate with false token', async () => {
  const invalidTokenAuth = jwt.sign({ userId: 1 }, 'malicious secret');

  let error;
  try {
    await requiresAuth('', '', {
      request: { get: () => invalidTokenAuth },
      db: { exists: { User: () => true } },
    });
  } catch (e) {
    error = e.message;
  }
  expect(error).toBe('Not Authenticated');

  try {
    await requiresAuth('', '', {
      request: { get: () => 'malformedJWT' },
      db: { exists: { User: () => true } },
    });
  } catch (e) {
    error = e.message;
  }
  expect(error).toBe('Not Authenticated');
});

test('requiresAuth should throw if not authenticated', async () => {
  const user = {};

  let error;
  try {
    await requiresAuth('', '', {
      request: { get: () => {} },
      db: { exists: { User: () => true } },
    });
  } catch (e) {
    error = e.message;
  }
  expect(error).toBe('Not Authenticated');
});

test('requiresProjectAccess should allow if authenticated and project member', async () => {
  const auth = jwt.sign({ userId: 1 }, process.env.APP_SECRET);

  const access = await requiresProjectAccess(
    '',
    { projectId: 2 },
    {
      request: { get: () => auth },
      db: { exists: { Project: () => true, User: () => true },
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
        db: { exists: { Project: async () => false, User: () => true} },
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
        db: { exists: { Project: async () => true, User: () => true } },
      },
    );
  } catch (error) {
    message = error.message;
  }
  expect(message).toBe('No Access');
});

test('requiresTeamReadAccess should allow if authenticated and project member, admin or owner', async () => {
  const auth = jwt.sign({ userId: 1 }, process.env.APP_SECRET);
  const context = {
    request: { get: () => auth },
    db: { exists: { Team: jest.fn(() => true), User: () => true } },
  };

  const access = await requiresTeamReadAccess('', { teamId: 2 }, context);
  expect(access).toBeTruthy();

  expect(context.db.exists.Team).toBeCalledWith({
    OR: [
      { owner: { id: 1 } },
      { admin_some: { id: 1 } },
      { member_some: { id: 1 } },
    ],
    id: 2,
  });
});

test('requiresTeamReadAccess should throw if authenticated and not in team', async () => {
  const auth = jwt.sign({ userId: 1 }, process.env.APP_SECRET);

  let message;
  try {
    await requiresTeamReadAccess(
      '',
      { id: 2 },
      {
        request: { get: () => auth },
        db: { exists: { Team: async () => false, User: () => true } },
      },
    );
  } catch (error) {
    message = error.message;
  }
  expect(message).toBe('No Access');
});

test('requiresTeamReadAccess should throw if authenticated without teamId', async () => {
  const auth = jwt.sign({ userId: 1 }, process.env.APP_SECRET);

  let message;
  try {
    await requiresTeamReadAccess(
      '',
      {}, // no teamId nor id
      {
        request: { get: () => auth },
        db: { exists: { Team: async () => true, User: () => true } },
      },
    );
  } catch (error) {
    message = error.message;
  }
  expect(message).toBe('No Access');
});

test('requiresTeamWriteAccess should allow if authenticated and project member, admin or owner', async () => {
  const auth = jwt.sign({ userId: 1 }, process.env.APP_SECRET);
  const context = {
    request: { get: () => auth },
    db: { exists: { Team: jest.fn(() => true), User: () => true } },
  };

  const access = await requiresTeamWriteAccess('', { teamId: 2 }, context);
  expect(access).toBeTruthy();

  expect(context.db.exists.Team).toBeCalledWith({
    OR: [{ owner: { id: 1 } }, { admin_some: { id: 1 } }],
    id: 2,
  });
});

test('requiresTeamWriteAccess should throw if authenticated and not in team', async () => {
  const auth = jwt.sign({ userId: 1 }, process.env.APP_SECRET);

  let message;
  try {
    await requiresTeamWriteAccess(
      '',
      { id: 2 },
      {
        request: { get: () => auth },
        db: { exists: { Team: async () => false, User: () => true },
      },
    );
  } catch (error) {
    message = error.message;
  }
  expect(message).toBe('No Access');
});

test('requiresTeamWriteAccess should throw if authenticated without teamId', async () => {
  const auth = jwt.sign({ userId: 1 }, process.env.APP_SECRET);

  let message;
  try {
    await requiresTeamWriteAccess(
      '',
      {}, // no teamId nor id
      {
        request: { get: () => auth },
        db: { exists: { Team: async () => true, User: () => true } },
      },
    );
  } catch (error) {
    message = error.message;
  }
  expect(message).toBe('No Access');
});

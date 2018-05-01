// import { requiresAuth, requiresProjectAccess } from '../utils/permissions';
import { getUserId, isUserProjectAllowed } from '../utils';

import { Query } from './Query';
import { exists } from 'fs';

jest.mock('../utils', () => ({
  getUserId: jest.fn(() => 'userId'),
  isUserProjectAllowed: jest.fn(() => true),
  hasTeamRead: jest.fn(() => true),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

test('Query should have needed resolvers', async () => {
  expect(Query.me).toBeDefined();
  expect(Query.project).toBeDefined();
  expect(Query.projects).toBeDefined();
  expect(Query.change).toBeDefined();
  expect(Query.changes).toBeDefined();
});

test('query for project', async () => {
  const context = {
    db: {
      query: {
        project: jest.fn(() => true),
      },
    },
  };

  const received = await Query.project({}, { id: 1 }, context, {
    info: 2,
  });

  // guards called?
  expect(getUserId).toHaveBeenCalledTimes(1);
  expect(isUserProjectAllowed).toHaveBeenCalledTimes(1);
  // check resolver
  expect(received).toBeTruthy();
  expect(context.db.query.project).toBeCalledWith(
    { where: { id: 1 } },
    { info: 2 },
  );
});

test('query for change', async () => {
  const context = {
    db: {
      query: {
        change: jest.fn(() => true),
      },
      exists: {
        Change: jest.fn(() => true),
        Project: jest.fn(() => true),
      },
    },
  };

  const received = await Query.change({}, { id: 1 }, context, {
    info: 2,
  });

  // guards called?
  expect(getUserId).toHaveBeenCalledTimes(1);
  // check resolver
  expect(received).toBeTruthy();
  expect(context.db.query.change).toBeCalledWith(
    { where: { id: 1 } },
    { info: 2 },
  );

  // throw if not author or admin
  const contextFailure = {
    db: {
      exists: {
        Change: jest.fn(() => false),
        Project: jest.fn(() => false),
      },
    },
  };

  let message;
  try {
    await Query.change({}, { id: 1 }, contextFailure, {
      info: 2,
    });
  } catch (error) {
    message = error.message;
  }
  expect(message).toBe('Not your Change');
});

test('query for projects', async () => {
  const context = {
    db: {
      query: {
        projects: jest.fn(() => true),
      },
    },
  };

  const received = await Query.projects({}, { id: 1 }, context, {
    info: 2,
  });

  // guards called?
  expect(getUserId).toHaveBeenCalledTimes(1);
  // check resolver
  expect(received).toBeTruthy();
  expect(context.db.query.projects).toBeCalledWith(
    {
      id: 1,
      where: {
        OR: [
          { member_some: { id: 'userId' } },
          { admin_some: { id: 'userId' } },
        ],
      },
    },
    { info: 2 },
  );
});

test('query for changes', async () => {
  const context = {
    db: {
      query: {
        changes: jest.fn(() => true),
      },
    },
  };

  const received = await Query.changes(
    {},
    { projectId: 1, rest: true },
    context,
    {
      info: 2,
    },
  );

  // guards called?
  expect(getUserId).toHaveBeenCalledTimes(1);
  expect(isUserProjectAllowed).toHaveBeenCalledTimes(1);
  // check resolver
  expect(received).toBeTruthy();
  expect(context.db.query.changes).toBeCalledWith(
    { orderBy: 'createdAt_DESC', rest: true, where: { project: { id: 1 } } },
    { info: 2 },
  );
});

test('query for me', async () => {
  const context = {
    db: {
      query: {
        user: jest.fn(() => true),
      },
    },
  };

  const received = await Query.me({}, {}, context, {
    info: 2,
  });

  // guards called?
  expect(getUserId).toHaveBeenCalledTimes(1);
  // check resolver
  expect(received).toBeTruthy();
  expect(context.db.query.user).toBeCalledWith(
    { where: { id: 'userId' } },
    { info: 2 },
  );
});

test('query for team', async () => {
  const context = {
    db: {
      query: {
        team: jest.fn(() => true),
      },
    },
  };

  const received = await Query.team({}, { id: 1 }, context, {
    info: 2,
  });

  // guards called?
  expect(getUserId).toHaveBeenCalledTimes(1);
  // expect(isUserTeamAllowed).toHaveBeenCalledTimes(1); // @TODO
  // check resolver
  expect(received).toBeTruthy();
  expect(context.db.query.team).toBeCalledWith(
    { where: { id: 1 } },
    { info: 2 },
  );
});

test('query for teams', async () => {
  const context = {
    db: {
      query: {
        teams: jest.fn(() => true),
      },
    },
  };

  const received = await Query.teams({}, { id: 1 }, context, {
    info: 2,
  });

  // guards called?
  expect(getUserId).toHaveBeenCalledTimes(1);
  // check resolver
  expect(received).toBeTruthy();
  expect(context.db.query.teams).toBeCalledWith(
    {
      id: 1,
      where: {
        OR: [
          { owner: { id: 'userId' } },
          { admin_some: { id: 'userId' } },
          { member_some: { id: 'userId' } },
        ],
      },
    },
    { info: 2 },
  );
});

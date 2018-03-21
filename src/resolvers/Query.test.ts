// import { requiresAuth, requiresProjectAccess } from '../utils/permissions';
import { getUserId, isUserProjectAllowed } from '../utils';

import { Query } from './Query';

jest.mock('../utils', () => ({
  getUserId: jest.fn(() => 'userId'),
  isUserProjectAllowed: jest.fn(() => true),
}));

test('Query should have needed resolvers', async () => {
  expect(Query.project).toBeDefined();
  expect(Query.projects).toBeDefined();
  expect(Query.change).toBeDefined();
  expect(Query.changes).toBeDefined();
  expect(Query.me).toBeDefined();
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
  getUserId.mockClear();
  isUserProjectAllowed.mockClear();
});

test('query for change', async () => {
  const context = {
    db: {
      query: {
        change: jest.fn(() => true),
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
  getUserId.mockClear();
  isUserProjectAllowed.mockClear();
});

test('query for projects', async () => {
  const context = {
    user: { id: 'DS' },
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
  getUserId.mockClear();
  isUserProjectAllowed.mockClear();
});

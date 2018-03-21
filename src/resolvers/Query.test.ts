// import { requiresAuth, requiresProjectAccess } from '../utils/permissions';
import { getUserId, isUserProjectAllowed } from '../utils';

import { Query } from './Query';

jest.mock('../utils', () => ({
  getUserId: jest.fn(),
  isUserProjectAllowed: jest.fn(),
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
});

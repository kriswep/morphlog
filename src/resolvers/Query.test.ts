import { Query } from './Query';

test('Query should have needed resolvers', async () => {
  expect(Query.project).toBeDefined();
  expect(Query.projects).toBeDefined();
  expect(Query.change).toBeDefined();
  expect(Query.changes).toBeDefined();
  expect(Query.me).toBeDefined();
});

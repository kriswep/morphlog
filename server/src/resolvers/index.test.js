/* globals test expect */

import resolvers from './index';

test('Query should have needed resolvers', async () => {
  expect(resolvers).toMatchSnapshot();
});

/* globals test expect jest */

import { change } from './change';

test('change should have add and update fn', async () => {
  expect(change.addChange).toBeDefined();
  expect(change.updateChange).toBeDefined();

  expect(typeof change.addChange).toBe('function');
  expect(typeof change.updateChange).toBe('function');
});

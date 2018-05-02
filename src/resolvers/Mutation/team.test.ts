// @ts-ignore
/* globals test expect jest */

import { getUserId } from '../../utils';

import { team } from './team';

jest.mock('../../utils', () => ({
  getUserId: jest.fn(() => true),
}));

test('team should have createTeam fn', async () => {
  expect(team.createTeam).toBeDefined();

  expect(typeof team.createTeam).toBe('function');
});

test('team should be able create a new team', async () => {
  const context = {
    db: {
      mutation: {
        createTeam: jest.fn(() => true),
      },
    },
  };

  const received = await team.createTeam({}, { name: 'teamName' }, context, {
    info: 2,
  });

  expect(received).toBeTruthy();
  expect(context.db.mutation.createTeam).toBeCalledWith(
    { data: { name: 'teamName', owner: { connect: { id: true } } } },
    { info: 2 },
  );
});

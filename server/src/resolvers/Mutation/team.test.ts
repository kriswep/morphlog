// @ts-ignore
/* globals test expect jest */

import { getUserId, hasTeamWrite } from '../../utils';

import { team } from './team';

jest.mock('../../utils', () => ({
  getUserId: jest.fn(() => true),
  hasTeamWrite: jest.fn(() => true),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

test('team should have createTeam, addTeamMember fn', async () => {
  expect(team.createTeam).toBeDefined();
  expect(team.addTeamMember).toBeDefined();

  expect(typeof team.createTeam).toBe('function');
  expect(typeof team.addTeamMember).toBe('function');
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

test('team should be able to add a member', async () => {
  const context = {
    db: {
      mutation: {
        updateTeam: jest.fn(() => true),
      },
      exists: {
        Team: jest.fn(() => true),
        // User: jest.fn(() => true).mockImplementationOnce(() => false),
      },
    },
  };

  const received = await team.addTeamMember(
    {},
    { email: 'email', teamId: 1 },
    context,
    {
      info: 2,
    },
  );

  expect(received).toBeTruthy();
  expect(getUserId).toHaveBeenCalled();
  expect(hasTeamWrite).toHaveBeenCalled();
  expect(context.db.mutation.updateTeam).toBeCalledWith(
    {
      data: { member: { connect: { email: 'email' } } },
      where: { id: 1 },
    },
    { info: 2 },
  );
});

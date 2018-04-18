/* globals test expect jest */

import { getUserId, isUserProjectAllowed } from '../../utils';

import { change } from './change';

jest.mock('../../utils', () => ({
  getUserId: jest.fn(() => 'user'),
  isUserProjectAllowed: jest.fn(() => true),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

test('change should have add and update fn', async () => {
  expect(change.addChange).toBeDefined();
  expect(change.updateChange).toBeDefined();

  expect(typeof change.addChange).toBe('function');
  expect(typeof change.updateChange).toBe('function');
});

test('change should be able to add a new change', async () => {
  const context = {
    db: {
      mutation: {
        createChange: jest.fn(() => true),
      },
    },
  };
  const projectId = 1;
  const text = 'text';

  const received = await change.addChange(
    {},
    { projectId, text: 'text' },
    context,
    {
      info: 2,
    },
  );

  expect(received).toBeTruthy();
  expect(context.db.mutation.createChange).toBeCalledWith(
    {
      data: {
        author: { connect: { id: 'user' } },
        project: { connect: { id: projectId } },
        text,
      },
    },
    { info: 2 },
  );
  expect(getUserId).toHaveBeenCalledTimes(1);
  expect(isUserProjectAllowed).toBeCalledWith(context, 1);
});

test('change should be able to update change', async () => {
  const context = {
    db: {
      mutation: {
        updateChange: jest.fn(() => true),
      },
      exists: {
        Change: jest.fn(() => true),
        Project: jest.fn(() => true),
      },
    },
  };
  const changeId = 1;
  const projectId = 2;
  const text = 'changed';

  const received = await change.updateChange(
    {},
    { changeId, projectId, text },
    context,
    {
      info: 2,
    },
  );

  expect(received).toBeTruthy();
  expect(context.db.mutation.updateChange).toBeCalledWith(
    { data: { text: 'changed' }, where: { id: 1 } },
    { info: 2 },
  );
  expect(getUserId).toHaveBeenCalledTimes(1);
  expect(isUserProjectAllowed).toBeCalledWith(context, 2);
});

test('update change shoukd fail if not allowed', async () => {
  const context = {
    db: {
      exists: {
        Change: jest.fn(async () => false),
        Project: jest.fn(() => false),
      },
    },
  };
  const changeId = 1;
  const projectId = 2;
  const text = 'changed';

  let message;

  try {
    await change.updateChange({}, { changeId, projectId, text }, context, {
      info: 2,
    });
  } catch (error) {
    message = error.message;
  }
  expect(message).toBe('Not your Change');
});

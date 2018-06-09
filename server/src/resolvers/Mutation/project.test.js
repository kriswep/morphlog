/* globals test expect jest */

// import { getUserId } from '../../utils';

import project from './project';

jest.mock('../../utils', () => ({
  getUserId: jest.fn(() => true),
}));

test('project should have createProject and addProjectMember fn', async () => {
  expect(project.createProject).toBeDefined();
  expect(project.addProjectMember).toBeDefined();

  expect(typeof project.createProject).toBe('function');
  expect(typeof project.addProjectMember).toBe('function');
});

test('project should be able create a new project', async () => {
  const context = {
    db: {
      mutation: {
        createProject: jest.fn(() => true),
      },
    },
  };

  const received = await project.createProject(
    {},
    { name: 'name', text: 'text' },
    context,
    {
      info: 2,
    },
  );

  expect(received).toBeTruthy();
  expect(context.db.mutation.createProject).toBeCalledWith(
    {
      data: {
        admin: { connect: { id: true } },
        name: 'name',
        team: { create: { owner: { connect: { id: true } } } },
      },
    },
    { info: 2 },
  );
});

test('project should be able to add a member', async () => {
  const context = {
    db: {
      mutation: {
        updateProject: jest.fn(() => true),
      },
      exists: {
        Project: jest.fn(() => true).mockImplementationOnce(() => false),
        User: jest.fn(() => true).mockImplementationOnce(() => false),
      },
    },
  };

  // first call should fail
  let err = false;
  try {
    await project.addProjectMember({}, { user: 1, project: 2 }, context, {
      info: 3,
    });
  } catch (e) {
    err = e;
  }
  expect(err.toString()).toEqual(
    "Error: Project not found or you're not an admin",
  );

  // second call should fail
  err = false;
  try {
    await project.addProjectMember({}, { user: 1, project: 2 }, context, {
      info: 3,
    });
  } catch (e) {
    err = e;
  }
  expect(err.toString()).toEqual('Error: User does not exist');

  const received = await project.addProjectMember(
    {},
    { user: 1, project: 2 },
    context,
    {
      info: 3,
    },
  );

  expect(received).toBeTruthy();
  expect(context.db.mutation.updateProject).toBeCalledWith(
    { data: { member: { connect: { id: 1 } } }, where: { id: 2 } },
    { info: 3 },
  );
});

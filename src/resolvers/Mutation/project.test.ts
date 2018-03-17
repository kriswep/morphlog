/* globals test expect jest */
import { getUserId } from '../../utils';

import { project } from './project';

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
    { data: { admin: { connect: { id: true } }, name: 'name' } },
    { info: 2 },
  );
});

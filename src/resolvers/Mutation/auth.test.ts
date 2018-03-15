/* globals test expect jest */
import * as jwt from 'jsonwebtoken';

import { auth } from './auth';

test('auth should have signup and login fn', async () => {
  expect(auth.signup).toBeDefined();
  expect(auth.login).toBeDefined();

  expect(typeof auth.signup).toBe('function');
  expect(typeof auth.login).toBe('function');
});

test('auth should be able to signup and return token', async () => {
  const context = {
    db: {
      mutation: {
        createUser: jest.fn(() => ({ id: 1 })),
      },
    },
  };

  const received = await auth.signup({}, { password: 'secret' }, context, {
    info: 2,
  });

  const { userId } = jwt.verify(received.token, process.env.APP_SECRET) as {
    userId: string;
  };
  expect(userId).toEqual(1);
  expect(received.user).toEqual({ id: 1 });
});

/* globals test expect jest */
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import auth from './auth';

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

  const { userId } = jwt.verify(received.token, process.env.APP_SECRET);
  expect(userId).toEqual(1);
  expect(received.user).toEqual({ id: 1 });
});

test('auth should be able to login and return token', async () => {
  const password = 'secret';
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = {
    id: 1,
    password: hashedPassword,
  };
  const context = {
    db: {
      query: {
        user: jest.fn(() => user).mockImplementationOnce(() => false),
      },
    },
  };

  // first call should fail
  let err = false;
  try {
    await auth.login({}, { email: 'invalid', password: 'secret' }, context, {
      info: 2,
    });
  } catch (e) {
    err = e;
  }
  expect(err.toString()).toEqual(
    'Error: No such user found for email: invalid',
  );

  // invalid password
  err = false;
  try {
    await auth.login({}, { email: 'mymail', password: 'wrong' }, context, {
      info: 2,
    });
  } catch (e) {
    err = e;
  }
  expect(err.toString()).toEqual('Error: Invalid password');

  // good call
  const received = await auth.login(
    {},
    { email: 'mymail', password },
    context,
    {
      info: 2,
    },
  );

  const { userId } = jwt.verify(received.token, process.env.APP_SECRET);
  expect(userId).toEqual(1);
  expect(received.user).toEqual(user);
});

/* globals test expect jest */
import AuthPayload from './AuthPayload';

test('AuthPayload should have user member', async () => {
  expect(AuthPayload.user).toBeDefined();
});

test('AuthPayload user should query fpr user', async () => {
  const context = {
    db: {
      query: {
        user: jest.fn(),
      },
    },
  };

  AuthPayload.user({ user: { id: 1 } }, {}, context, { info: 2 });
  expect(context.db.query.user).toHaveBeenCalledWith(
    { where: { id: 1 } },
    { info: 2 },
  );
});

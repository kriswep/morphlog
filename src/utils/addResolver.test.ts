/* globals test expect jest */

import addResolver from './addResolver';

test('addResolver should add resolver function', async () => {
  const resolver = jest.fn();
  const anotherResolver = jest.fn();

  const withResolver = addResolver(resolver);
  expect(withResolver.addResolver).toBeDefined();

  const withAnotherResolver = withResolver.addResolver(anotherResolver);
  expect(withAnotherResolver.addResolver).toBeDefined();

  // should call both resolvers
  await withAnotherResolver();
  expect(resolver).toHaveBeenCalled();
  expect(anotherResolver).toHaveBeenCalled();
});

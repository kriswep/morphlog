/* globals test expect window */
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import createClient from '../../utils/apolloMocks';

import Profile from './Profile';

const successMock = {
  Query: () => ({
    me: () => ({
      id: 'cjcp94wxp025801100npb28yg',
      email: 'email',
      name: 'name',
      createdAt: '2018-01-21T20:45:06.000Z',
      updatedAt: '2018-01-21T20:45:06.000Z',
    }),
  }),
};
const errorMock = {
  Query: () => ({
    me: () => {
      throw new Error();
    },
  }),
};

test('Profile renders when logged', async () => {
  const client = createClient(successMock);

  const wrapper = mount(
    <ApolloProvider client={client}>
      <Profile />
    </ApolloProvider>,
  );
  // yes, twice..
  wrapper.setProps({ foo: 'bar' }); // poke it to rerender...
  await new Promise(res => window.setTimeout(res, 1));
  wrapper.setProps({ projectId: 'bar' }); // poke it to rerender...
  expect(toJson(wrapper.find('[data-test="profile"]'))).toMatchSnapshot();
});

test('Authenticate form renders when not logged', async () => {
  const client = createClient(errorMock);

  const wrapper = mount(
    <ApolloProvider client={client}>
      <Profile />
    </ApolloProvider>,
  );
  await new Promise(res => window.setTimeout(res, 1));
  wrapper.setProps({ projectId: 'bar' }); // poke it to rerender...
  expect(toJson(wrapper.find('[data-test="authenticate"]'))).toMatchSnapshot();
});

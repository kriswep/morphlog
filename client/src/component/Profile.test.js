/* globals test expect jest */
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import createClient from '../../utils/apolloMocks';

import Profile from './Profile';

const mocks = {
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
const client = createClient(mocks);

test('Profile renders correctly', async () => {
  const wrapper = mount(
    <ApolloProvider client={client}>
      <Profile />
    </ApolloProvider>,
  );
  await new Promise(res => window.setTimeout(res, 1));
  wrapper.setProps({ foo: 'bar' }); // poke it to rerender...
  // todo: think mock apollo error
  // expect(toJson(wrapper.find('[data-test="authenticate"]'))).toMatchSnapshot();
  await new Promise(res => window.setTimeout(res, 1));
  wrapper.setProps({ projectId: 'bar' }); // poke it to rerender...
  expect(toJson(wrapper.find('[data-test="profile"]'))).toMatchSnapshot();
});

/* globals test expect jest */
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import createClient from '../../utils/apolloMocks';

import Profile from './Profile';

const client = createClient();

test('Profile renders correctly', async () => {
  const wrapper = mount(
    <ApolloProvider client={client}>
      <Profile />
    </ApolloProvider>,
  );
  await new Promise(res => window.setTimeout(res, 1));
  wrapper.setProps({ projectId: 'bar' }); // poke it to rerender...
  expect(toJson(wrapper.find('[data-test="profile"]'))).toMatchSnapshot();
});

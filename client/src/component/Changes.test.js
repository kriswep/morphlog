/* globals test expect window */
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import createClient from '../../utils/apolloMocks';

import Changes from './Changes';

const mocks = {
  Query: () => ({
    changes: () => [
      {
        id: '1234',
        text: 'MyChange',
        createdAt: '2018-01-21T20:45:06.000Z',
        updatedAt: '2018-01-21T20:45:06.000Z',
      },
      {
        id: '5678',
        text: 'MyOtherChange',
        createdAt: '2018-01-21T20:45:06.000Z',
        updatedAt: '2018-01-21T20:45:06.000Z',
      },
    ],
  }),

  // Mutation: () => ...
};

const client = createClient(mocks);

test('Changes renders correctly', async () => {
  const wrapper = mount(
    <ApolloProvider client={client}>
      <Changes projectId="cjcp94wxp025801100npb28yg" />
    </ApolloProvider>,
  );
  await new Promise(res => window.setTimeout(res, 1));
  wrapper.setProps({ projectId: 'bar' }); // poke it to rerender...
  expect(toJson(wrapper.find('[data-test="change"]'))).toMatchSnapshot();
  expect(toJson(wrapper.find('[data-test="newChange"]'))).toMatchSnapshot();
});

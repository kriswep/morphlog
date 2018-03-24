/* globals test expect jest */
// TODO checkout https://github.com/react-cosmos/react-cosmos#react-apollo-graphql

import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import createClient from '../../utils/apolloMocks';
import Changes from './Changes';

import Project from './Project';

jest.mock('./Changes', () => {
  return () => <div>MockedChange</div>;
});

const mocks = {
  Query: () => ({
    project: () => ({
      id: 'cjcp94wxp025801100npb28yg',
      name: 'MyProject',
      createdAt: '2018-01-21T20:45:06.000Z',
      updatedAt: '2018-01-21T20:45:06.000Z',
    }),
  }),

  // Mutation: () => ...
};
const client = createClient(mocks);

test('Projects renders correctly', async () => {
  const wrapper = mount(
    <ApolloProvider client={client}>
      <Project projectId="cjcp94wxp025801100npb28yg" />
    </ApolloProvider>,
  );
  await new Promise(res => window.setTimeout(res, 1));
  wrapper.setProps({ projectId: 'bar' }); // poke it to rerender...
  expect(toJson(wrapper.find('[data-test="project"]'))).toMatchSnapshot();
});

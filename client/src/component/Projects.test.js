/* globals test expect jest window */
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import createClient from '../../utils/apolloMocks';
// import Project from './Project';
// import { Link } from 'react-router-dom';

import Projects from './Projects';

jest.mock('./Project', () => () => <div>MockedProject</div>);
jest.mock('react-router-dom', () => {
  Link: () => <a>MockedLink</a>; // eslint-disable-line
});

const mocks = {
  Query: () => ({
    projects: () => [
      {
        id: '1234',
        text: 'MyProject',
        createdAt: '2018-01-21T20:45:06.000Z',
        updatedAt: '2018-01-21T20:45:06.000Z',
      },
      {
        id: '5678',
        text: 'MyOtherProject',
        createdAt: '2018-01-21T20:45:06.000Z',
        updatedAt: '2018-01-21T20:45:06.000Z',
      },
    ],
  }),

  // Mutation: () => ...
};

const client = createClient(mocks);

test('Projects renders correctly', async () => {
  const match = {
    params: {
      projectId: 'cjcp94wxp025801100npb28yg',
    },
  };
  const wrapper = mount(
    <ApolloProvider client={client}>
      <Projects match={match} />
    </ApolloProvider>,
  );
  await new Promise(res => window.setTimeout(res, 1));
  wrapper.setProps({ projectId: 'bar' }); // poke it to rerender...
  expect(toJson(wrapper.find('[data-test="projects"]'))).toMatchSnapshot();
  expect(toJson(wrapper.find('[data-test="newProject"]'))).toMatchSnapshot();
});

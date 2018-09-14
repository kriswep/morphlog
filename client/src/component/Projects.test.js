/* globals test expect jest window */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';

import { getData, PreMockedProvider } from '../../utils/apolloMocks2';
import Projects, { PROJECTS_QUERY } from './Projects';

jest.mock('./Project', () => () => <div>MockedProject</div>);

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

test('Projects renders correctly', async () => {
  const match = {
    params: {
      projectId: 'cjcp94wxp025801100npb28yg',
    },
  };
  const data = await getData({
    mocks,
    query: PROJECTS_QUERY,
  });

  const wrapper = mount(
    <BrowserRouter>
      <PreMockedProvider data={data} query={PROJECTS_QUERY}>
        <Projects match={match} />
      </PreMockedProvider>
    </BrowserRouter>,
  );

  await new Promise(res => window.setTimeout(res, 1));
  wrapper.setProps({ projectId: 'bar' }); // poke it to rerender...
  expect(toJson(wrapper.find('[data-test="projects"]'))).toMatchSnapshot();
  expect(toJson(wrapper.find('[data-test="newProject"]'))).toMatchSnapshot();
});

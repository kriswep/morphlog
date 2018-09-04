/* globals test expect window */
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { getData, PreMockedProvider } from '../../utils/apolloMocks2';

import Changes, { CHANGES_QUERY } from './Changes';

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

test('Changes renders correctly', async () => {
  const args = { projectId: 'cjcp94wxp025801100npb28yg' };
  const data = await getData({
    mocks,
    query: CHANGES_QUERY,
    args,
  });

  const wrapper = mount(
    <PreMockedProvider data={data} args={args} query={CHANGES_QUERY}>
      <Changes projectId="cjcp94wxp025801100npb28yg" />
    </PreMockedProvider>,
  );
  await new Promise(res => window.setTimeout(res, 1));
  wrapper.setProps({ projectId: 'bar' }); // poke it to rerender...
  expect(toJson(wrapper.find('[data-test="change"]'))).toMatchSnapshot();
  expect(toJson(wrapper.find('[data-test="newChange"]'))).toMatchSnapshot();
});

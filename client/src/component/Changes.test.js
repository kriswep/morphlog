/* globals afterEach test expect */
import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library';
import { getData, PreMockedProvider } from '../../utils/apolloMocks2';

import Changes, { CHANGES_QUERY } from './Changes';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

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

  const { getByTestId } = render(
    <PreMockedProvider data={data} args={args} query={CHANGES_QUERY}>
      <Changes projectId="cjcp94wxp025801100npb28yg" />
    </PreMockedProvider>,
  );

  const change = await waitForElement(() => getByTestId('change'));
  const newChange = await waitForElement(() => getByTestId('newChange'));
  expect(change).toMatchSnapshot();
  expect(newChange).toMatchSnapshot();
});

const errorMock = {
  Query: () => ({
    changes: () => {
      throw new Error('changes error');
    },
  }),
};
test('Changes renders err', async () => {
  const args = { projectId: 'cjcp94wxp025801100npb28yg' };
  const data = await getData({
    mock: errorMock,
    query: CHANGES_QUERY,
    args,
  });

  const { getByTestId } = render(
    <PreMockedProvider data={data} args={args} query={CHANGES_QUERY}>
      <Changes projectId="cjcp94wxp025801100npb28yg" />
    </PreMockedProvider>,
  );

  const error = await waitForElement(() => getByTestId('error'));
  expect(error).toMatchSnapshot();
});

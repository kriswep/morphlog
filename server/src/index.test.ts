import { GraphQLServer } from 'graphql-yoga';

import { server } from './index';

jest.mock('graphql-yoga', () => ({
  GraphQLServer: function(props) {
    expect(props).toMatchSnapshot();
    this.mockServerStart = jest.fn();
    return { start: () => true };
  },
}));

test('index should start GraphQLServer', async () => {
  expect(server).toBeDefined();
});

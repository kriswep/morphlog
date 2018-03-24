/* globals test expect jest */
// TODO checkout https://github.com/react-cosmos/react-cosmos#react-apollo-graphql

import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import fs from 'fs';

import ProjectWithApollo, { Project } from './Project';
import Changes from './Changes';
// import '../../'

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

jest.mock('./Changes', () => {
  return () => <div>MockedChange</div>;
});

const buffer = fs.readFileSync('../schema/appSchema.graphql');
const typeDefs = buffer.toString();

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

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({
  schema,
  mocks,
});

const apolloCache = new InMemoryCache(window.__APOLLO_STATE__);

const client = new ApolloClient({
  cache: apolloCache,
  link: new SchemaLink({ schema }),
});

test('Projects renders correctly', async () => {
  const wrapper = mount(
    <ApolloProvider client={client}>
      <ProjectWithApollo projectId="cjcp94wxp025801100npb28yg" />
    </ApolloProvider>,
  );
  await new Promise(res => window.setTimeout(res, 100));
  wrapper.setProps({ projectId: 'bar' });
  expect(toJson(wrapper.find(Project))).toMatchSnapshot();
});

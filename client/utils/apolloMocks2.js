import React from 'react';
import fs from 'fs';

import { MockedProvider } from 'react-apollo/test-utils';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { graphql } from 'graphql';
import { print } from 'graphql/language/printer';

const buffer = fs.readFileSync('../schema/appSchema.graphql');
const typeDefs = buffer.toString();

export const getData = async props => {
  const { mocks, args, query } = props;
  const queryString = print(query);
  const schema = makeExecutableSchema({
    typeDefs,
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
  });
  addMockFunctionsToSchema({
    schema,
    mocks,
  });
  const res = await graphql(schema, queryString, null, null, args);
  return res.data;
};

export const PreMockedProvider = props => {
  const { data, args, query, children } = props;
  const mocks = [
    {
      request: {
        query,
        variables: args,
      },
      result: {
        data,
      },
    },
  ];

  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      {children}
    </MockedProvider>
  );
};

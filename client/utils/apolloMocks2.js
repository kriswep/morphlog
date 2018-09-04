import fs from 'fs';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { graphql } from 'graphql';
import { print } from 'graphql/language/printer';

const buffer = fs.readFileSync('../schema/appSchema.graphql');
const typeDefs = buffer.toString();

const createClient = async (mocks, query, args = {}) => {
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

export default createClient;

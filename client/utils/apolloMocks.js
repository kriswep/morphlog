import fs from 'fs';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

const buffer = fs.readFileSync('../schema/appSchema.graphql');
const typeDefs = buffer.toString();

const createClient = mocks => {
  const schema = makeExecutableSchema({ typeDefs });
  addMockFunctionsToSchema({
    schema,
    mocks,
  });

  const apolloCache = new InMemoryCache(window.__APOLLO_STATE__);

  return new ApolloClient({
    cache: apolloCache,
    link: new SchemaLink({ schema }),
  });
};

export default createClient;

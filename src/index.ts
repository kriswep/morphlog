import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from './generated/prisma';
import { bodyParserGraphQL } from 'body-parser-graphql';

import resolvers from './resolvers';
import directiveResolvers from './directives';

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  directiveResolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma DB service (value is set in .env)
      secret: process.env.PRISMA_SECRET, // taken from database/prisma.yml (value is set in .env)
      debug: true, // log all GraphQL queries & mutations
    }),
  }),
});

server.express.use(bodyParserGraphQL());

server.start(() => console.log(`Server is running on http://localhost:4000`));

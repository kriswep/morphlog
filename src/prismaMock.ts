import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import { typeDefs } from './generated/prisma';

// Make a GraphQL schema with no resolvers
const schema = makeExecutableSchema({ typeDefs });

// Add mocks, modifies schema in place
addMockFunctionsToSchema({ schema });

const PORT = 3020;

const app = express();

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.listen(PORT);

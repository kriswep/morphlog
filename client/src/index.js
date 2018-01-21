import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-client-preset';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});

const middlewareAuthLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('auth');
  const authorization = token ? `Bearer ${token}` : null;
  operation.setContext({
    headers: {
      authorization,
    },
  });
  return forward(operation);
});

const httpLinkWithAuthToken = middlewareAuthLink.concat(httpLink);

const client = new ApolloClient({
  link: httpLinkWithAuthToken,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();

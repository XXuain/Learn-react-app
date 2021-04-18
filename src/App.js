import React from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

const ErrorLogLink = onError(({ graphQLErrors, networkError }) => {
  // console.log(error.networkError.statusCode);
  if (graphQLErrors) console.log('graphQLErrors: ', graphQLErrors);
  graphQLErrors.map(({ message, locations, path }) =>
    console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
  );
  if (networkError) {
    console.log('networkError: ', networkError.statusCode);
    console.log(`[Network error]: ${networkError}`);
  }
});

//
const RequestLink = new HttpLink({
  // uri: process.env.REACT_APP_APOLLO_SERVER_URL,
  uri: 'https://plp0mopxq.sse.codesandbox.io/'
});

// server 連線
const client = new ApolloClient({
  link: from([ErrorLogLink, RequestLink]),
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>Building Mutation components 🚀</h2>
      <AddTodo />
      <Todos />
    </div>
  </ApolloProvider>
);

export default App;

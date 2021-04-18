import React from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

// server 連線
const client = new ApolloClient({
  uri: 'https://plp0mopxq.sse.codesandbox.io/',
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

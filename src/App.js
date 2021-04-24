import React from 'react';
import CusApolloProvider from './plugin/apollo';
import TodoList from './view/TodoList';

const App = () => (
  <CusApolloProvider>
    <TodoList />
  </CusApolloProvider>
);

export default App;

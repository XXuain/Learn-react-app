import React from 'react';
import CusApolloProvider from './plugin/apollo';
import TodoList from './view/TodoList';
import Context from './view/Context';
import Reducer from './view/Reducer';

const App = () => (
  <CusApolloProvider>
    <TodoList />
    <Context />
    <Reducer />
  </CusApolloProvider>
);

export default App;

import React from 'react';
import CusApolloProvider from './plugin/apollo';
import TodoList from './view/TodoList';
import Context from './view/Context';
import Reducer from './view/Reducer';
import Counter from './view/Counter';
import Hook from './view/Hook';

import { Provider as ReduxProvider } from 'react-redux';

import configureAppStore from './store';
const store = configureAppStore();

const App = () => (
  <ReduxProvider store={store}>
    <CusApolloProvider>
      <TodoList />
      <Context />
      <Reducer />
      <Counter />
      <Hook />
    </CusApolloProvider>
  </ReduxProvider>
);

export default App;

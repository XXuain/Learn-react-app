import React from 'react';
import CusApolloProvider from './plugin/apollo';
import Hook from './view/Hook';

import { Provider as ReduxProvider } from 'react-redux';

import configureAppStore from './store';
const store = configureAppStore();

const App = () => (
  <ReduxProvider store={store}>
    <CusApolloProvider>
      <Hook />
    </CusApolloProvider>
  </ReduxProvider>
);

export default App;

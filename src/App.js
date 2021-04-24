import React from 'react';
import CusApolloProvider from './plugin/apollo';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

const App = () => (
  <CusApolloProvider>
    <div>
      <h2>Building Mutation components 🚀</h2>
      <AddTodo />
      <Todos />
    </div>
  </CusApolloProvider>
);

export default App;

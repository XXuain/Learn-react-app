import React, { Suspense } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import CusApolloProvider from './plugin/apollo';
import 'antd/dist/antd.css';

import MainLayout from './layout/MainLayout';
// import Welcome from './view/Welcome';
// import HookTry from './view/HookTry';
// import RouterTry from './view/RouterTry';

import configureAppStore from './store';

const Welcome = React.lazy(() => import('./view/Welcome'));
const HookTry = React.lazy(() => import('./view/HookTry'));
const RouterTry = React.lazy(() => import('./view/RouterTry'));
const store = configureAppStore();

const App = () => (
  <ReduxProvider store={store}>
    <CusApolloProvider>
      <BrowserRouter>
        <MainLayout>
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <Route path="/" exact>
                <Redirect to="/welcome" />
              </Route>
              <Route path="/welcome" exact>
                <Welcome />
              </Route>
              <Route path="/routerTry">
                <RouterTry />
              </Route>
              <Route path="/hookTry">
                <HookTry />
              </Route>
            </Switch>
          </Suspense>
        </MainLayout>
      </BrowserRouter>
    </CusApolloProvider>
  </ReduxProvider>
);

export default App;

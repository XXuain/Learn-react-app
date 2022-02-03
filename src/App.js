import React, { Suspense } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import CusApolloProvider from './plugin/apollo';

import MainLayout from './layout/MainLayout';
import Welcome from './view/Welcome';
import About from './view/About';
import RouterTry from './view/RouterTry';
import HookTry from './view/HookTry';
import configureAppStore from './store';
/**
 * 解決 Loading chunk failed
 */
// const retry = (fn, retriesLeft = 5, interval = 1000) => {
//   return new Promise((resolve, reject) => {
//     fn()
//       .then(resolve)
//       .catch((error) => {
//         setTimeout(() => {
//           if (retriesLeft === 1) {
//             // reject('maximum retries exceeded');
//             reject(error);
//             return;
//           }

//           // Passing on "reject" is the important part
//           retry(fn, retriesLeft - 1, interval).then(resolve, reject);
//         }, interval);
//       });
//   });
// };

// const lazyLoadView = (view) => {
//   const LazyView = React.lazy(() => retry(() => import(/* webpackChunkName: "view-[request]" */ `@VIEW/${view}`)));
//   return <LazyView />;
// };

// const lazyLoadView = (view) => {
//   const LazyView = React.lazy(() => import(/* webpackChunkName: "view-[request]" */ `@VIEW/${view}`));
//   console.log('LazyView >> ', LazyView);
//   return <LazyView />;
// };

// const Welcome = React.lazy(() => import('./view/Welcome'));
// const HookTry = React.lazy(() => import('./view/HookTry'));
// const RouterTry = React.lazy(() => import('./view/RouterTry'));
// const RenderTry = React.lazy(() => import('./view/RenderTry'));

const store = configureAppStore();

console.log('REACT_APP_BASEURL >> ', process.env.REACT_APP_SECRET_CODE);

const App = () => (
  <ReduxProvider store={store}>
    <CusApolloProvider>
      {/* <Welcome /> */}
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
              <Route path="/about">
                <About />
              </Route>
              <Route path="/routerTry">
                <RouterTry />
              </Route>
              <Route path="/hookTry">
                <HookTry />
              </Route>
              {/* <Route path="/renderTry"><RenderTry /></Route> */}
              {/* <Route path="/welcome" exact>{lazyLoadView('Welcome')}</Route>
              <Route path="/about">{lazyLoadView('About')}</Route>
              <Route path="/routerTry">{lazyLoadView('RouterTry')}</Route>
              <Route path="/hookTry">{lazyLoadView('HookTry')}</Route>
              <Route path="/renderTry">{lazyLoadView('RenderTry')}</Route> */}
            </Switch>
          </Suspense>
        </MainLayout>
      </BrowserRouter>
    </CusApolloProvider>
  </ReduxProvider>
);

export default App;

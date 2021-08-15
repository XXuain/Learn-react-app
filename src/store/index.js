import { configureStore } from '@reduxjs/toolkit';
// configureStore like redux's createStore
import rootReducer from './reducers'; // 從reducers/index取得combineReducers回傳的物件

export default function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer
    // devTools: true
  });

  // handle hot reloading
  // if (process.env.NODE_ENV !== 'production' && module.hot) {
  //   module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  // }

  return store;
}

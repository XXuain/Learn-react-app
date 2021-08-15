// 可以直接使用 redux-toolkit

import { combineReducers } from 'redux';
import counter from './counterSlice';
export default combineReducers({
  counter
});

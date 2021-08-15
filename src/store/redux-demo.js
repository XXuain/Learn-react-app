const { createStore } = require('redux');

const initialState = {
  counter : 0,
  showCounter: true
}
const counterReducer = (state = initialState, action) => {
  if(action.type === 'increment') {
    return {
      counter: state.counter + 1
    }
  }
  if(action.type === 'decrement') {
    return {
      counter: state.counter - 1
    }
  }
}

const store = createStore(counterReducer);

// const counterSubscriber = () => {
//   store.getState();
// }

// use useSelection Redux automatically  set up a subscription
// store.subscribe(counterSubscriber); 

// store.dispatch({ type: 'increment' });
// store.dispatch({ type: 'decrement' });

export default store;
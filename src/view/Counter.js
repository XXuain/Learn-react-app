import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../store/reducers/counterSlice';

const Counter = () => {
  // 使用 useSelector 取得 state
  const stateData = useSelector((state) => state);
  const count = useSelector((state) => state.counter.value);
  // 使用 useDispatch 取得 dispatch 方法
  const dispatch = useDispatch();

  console.log('stateData:', stateData);

  return (
    <div>
      <h1>Reducer Try</h1>
      <button aria-label="Increment value" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span>{count}</span>
      <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;

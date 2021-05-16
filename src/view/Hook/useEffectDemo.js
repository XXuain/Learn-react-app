import { useState, useEffect } from 'react';

export default function useEffectDemo() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  useEffect(() => {
    // 只在初次 render 時執行
    console.log('once');
  }, []);

  useEffect(() => {
    // 初次 render 以及 array 中的值發生改變時會執行
    console.log('count have change');
  }, [count]);

  useEffect(() => {
    // 初次及未來的每次 render 都會執行
    console.log('after every render');
  });

  return (
    <div>
      <h2>useEffect demo</h2>
      <p>點擊了 {count}</p>
      <button onClick={() => setCount(count + 1)}>點擊</button>

      <p>點擊了 {otherState}</p>
      <button onClick={() => setOtherState(otherState + 1)}>點擊</button>
    </div>
  );
}

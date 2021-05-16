import { useState, useEffect } from 'react';

function init() {
  console.log('run init');
  return 4;
}
export default function useStateDemo() {
  /**
   * Init state 的 2 種方式
   */
  // 每次 render 都會跑一次
  // const [clickCount, setClickCount] = useState(0);
  // const [clickCount, setClickCount] = useState(init());

  // 只跑第一次 render 時
  const [clickCount, setClickCount] = useState(() => init());

  const clickCountBtn = () => {
    return (
      <div>
        <p>你點擊了 {clickCount} 次</p>
        <button onClick={() => setClickCount(clickCount + 1)}>點擊</button>
      </div>
    );
  };

  /**
   * Update state 的 2 種方式
   */
  const [updateCount, setUpdateCount] = useState(5);
  const updateCountHandle = async () => {
    await setUpdateCount(updateCount + 1);
    // await setUpdateCount((pre) => {
    //   console.log('preState: ', pre);
    //   return pre + 1;
    // });
    console.log('updateCount: ', updateCount);
  };

  useEffect(() => {
    // do something
    console.log('useEffect: ', updateCount);
  }, [updateCount]);
  const updateCountBtn = () => {
    return (
      <div>
        <p>最新的點擊次數是 {updateCount} 次</p>
        <button onClick={() => updateCountHandle()}>更新點擊</button>
      </div>
    );
  };

  return (
    <div>
      <h2>useState demo</h2>
      {clickCountBtn()}
      {updateCountBtn()}
    </div>
  );
}

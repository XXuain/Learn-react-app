import { useState } from 'react';

function init() {
  console.log('run init');
  return 4;
}
export default function useStateDemo() {
  // 每次 render 都會跑一次
  // const [clickCount, setClickCount] = useState(0);
  // const [clickCount, setClickCount] = useState(init());

  // 只跑第一次 render 時
  const [clickCount, setClickCount] = useState(() => init());

  return (
    <div>
      <h3>你點擊了 {clickCount} 次</h3>
      <button onClick={() => setClickCount((pre) => pre + 1)}>點擊</button>
    </div>
  );
}

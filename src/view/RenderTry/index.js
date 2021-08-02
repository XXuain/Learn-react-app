import React, { useState } from 'react';
import DemoOutput from '../../components/demoOutput';

export default function RenderTry() {
  const [showParagraph, setShowParagraph] = useState(false);
  console.log('APP RUNNING');

  const toggleParagraph = () => {
    setShowParagraph((pre) => !pre);
  };

  return (
    <div>
      <h1>Hi There!</h1>
      {/* 引用 DemoOutput 並傳入 props */}
      <DemoOutput show={showParagraph} />
      <button onClick={toggleParagraph}>Toggle paragraph</button>
    </div>
  );
}

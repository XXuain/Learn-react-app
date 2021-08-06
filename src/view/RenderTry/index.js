import React, { useState, useCallback } from 'react';
import DemoOutput from '../../components/demoOutput';
import Button from '../../components/Button';

export default function RenderTry() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log('APP RUNNING', showParagraph);

  const toggleParagraph = useCallback(() => {
    allowToggle && setShowParagraph((pre) => !pre);
  }, [allowToggle]);

  const allowToggleHandle = useCallback(() => {
    setAllowToggle(true);
  }, []);

  return (
    <div>
      <h1>Hi There!</h1>
      {/* 引用 DemoOutput 並傳入 props */}
      <DemoOutput show={false} />
      <Button onClick={toggleParagraph}>Toggle paragraph</Button>
      <Button onClick={allowToggleHandle}>allowToggle</Button>
    </div>
  );
}

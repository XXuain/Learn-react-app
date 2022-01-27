import React, { useState, useCallback, useMemo } from 'react';
// import DemoOutput from '../../components/DemoOutput';
import DemoList from '@COM/DemoList';
import Button from '@COM/Button';

export default function RenderTry() {
  // console.log('APP RUNNING');

  // const [showParagraph, setShowParagraph] = useState(false);
  // const [allowToggle, setAllowToggle] = useState(false);
  // const toggleParagraph = useCallback(() => {
  //   allowToggle && setShowParagraph((pre) => !pre);
  //   // state was NOT updated here!
  // }, [allowToggle]);
  // const allowToggleHandle = useCallback(() => {
  //   setAllowToggle(true);
  // }, []);

  console.log('APP RUNNING');
  const [listTitle, setListTitle] = useState('My Title');
  const changeTitleHandle = useCallback(() => {
    setListTitle((pre) => pre + 'New Title!');
  }, []);

  const items = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div>
      {/* <h1>Hi There!</h1> */}
      {/* 引用 DemoOutput 並傳入 props */}
      {/* <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraph}>Toggle paragraph</Button>
      <Button onClick={allowToggleHandle}>allowToggle</Button> */}
      <h2>{listTitle}</h2>
      <DemoList items={items} />
      <Button onClick={changeTitleHandle}>changeTitle</Button>
    </div>
  );
}

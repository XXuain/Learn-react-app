import React from 'react';
import Paragraph from './Paragraph';

const DemoOutput = (props) => {
  console.log('DemoOutput RUNNING!');
  return <Paragraph>{props.show ? 'This is new!' : ''}</Paragraph>;
};
// 加上 memo
export default React.memo(DemoOutput);

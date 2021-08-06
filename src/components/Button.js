import React from 'react';
function Button(props) {
  console.log('Btn RUNNING!', props.children);
  return <button onClick={props.onClick}>{props.children}</button>;
}
export default React.memo(Button);

// import React, { useMemo } from 'react';
import React from 'react';
function DemoList({ items }) {
  console.log('DEMO LIST RUNNING!');
  // const sortList = useMemo(() => {
  //   console.log('sortList!');
  //   return items.sort((a, b) => a - b);
  // }, [items]);

  const sortList = items.sort((a, b) => a - b);

  return (
    <>
      <ul>
        {sortList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
// 加上 React.memo
export default React.memo(DemoList);

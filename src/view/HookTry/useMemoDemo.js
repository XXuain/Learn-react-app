import React, { useMemo, useState } from 'react';

const WithoutUseMemo = () => {
  const refCount = React.useRef(0);
  const testFunction = () => {
    refCount.current++;
    return 1;
  };
  const value = testFunction();

  return (
    <>
      <p>
        Component without useMemo. Value: {value}. Ref count: {refCount.current}
      </p>
    </>
  );
};

const HaveUseMemo = () => {
  const refCount = React.useRef(0);
  const testFunction = () => {
    refCount.current++;
    return 1;
  };
  const value = useMemo(() => testFunction(), []);

  return (
    <>
      <p>
        Component useMemo. Value: {value}. Ref count: {refCount.current}
      </p>
    </>
  );
};

export default function useMemoDemo() {
  const [value, setValue] = useState('');

  const handleSetValue = (e) => setValue(e.target.value);

  return (
    <div>
      <h2>useMemoDemo</h2>
      <input type="text" value={value} onChange={handleSetValue}></input>
      <WithoutUseMemo />
      <HaveUseMemo />
    </div>
  );
}

import React, { createContext, useContext } from 'react';

const ParentContext = createContext();

const Child = () => {
  const state = useContext(ParentContext);
  return <div>{state.title}</div>;
};
export default function useContextDemo() {
  const state = {
    title: 'Hi this is context!'
  };
  return (
    <ParentContext.Provider value={state}>
      <h2>useContextDemo</h2>
      <Child />
    </ParentContext.Provider>
  );
}

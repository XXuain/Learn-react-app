import React, { createContext, useContext } from 'react';

// 建立一個 Context Component
const ParentContext = createContext();

// 下層組件
const Son = () => {
  // 將 Context Component 放進 useContext 中取得 value 的資料
  const title = useContext(ParentContext);
  return (
    // render 出 value 的資料
    <h1>{title}</h1>
  );
};

// 上層組件
const Context = () => {
  const title = 'Hi this is context!';
  return (
    // 將要傳遞的資料放進 Context Component.Provider 的 value 中
    <ParentContext.Provider value={title}>
      <Son />
    </ParentContext.Provider>
  );
};

export default Context;

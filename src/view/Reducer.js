import { useState, useReducer } from 'react';

// 一個 Reducer 用來描述根據指令執行對應的動作，會回傳一個新的 state 物件，是個純函式
const todoReducer = (state, action) => {
  // 判斷指令
  switch (action.type) {
    case 'ADD_TODO':
      let newKey = 1;
      if (state.list.length !== 0) {
        newKey = state.list[state.list.length - 1].listKey + 1;
      }
      return {
        ...state,
        list: [...state.list, { listKey: newKey, name: action.payload.name }]
      };
    default:
      return state;
  }
};

// 初始資料，為 state 的初始值，通常會在這裡把結構描述完整
const initState = {
  list: [{ listKey: 1, name: 'first' }]
};

const Todo = () => {
  const [listName, setListName] = useState('');

  /*
   使用 useReducer 將 Reducer 和 初始 State 個別傳入，
   會回傳一個陣列，在此使用解構賦值將陣列的位置 0 及 1 分別放到 state 和 dispatch 中，
   state 會隨著 Reducer 回傳的 state 做改變，
   dispatch 是用來和 Reducer 溝通的 Function 。
  */
  const [state, dispatch] = useReducer(todoReducer, initState);
  const addTodo = () => {
    //使用 dispatch 呼叫 Reducer 處理 state ，這個參數會被傳進 Reducer 的 action 中
    dispatch({ type: 'ADD_TODO', payload: { name: listName } });
    setListName('');
  };

  return (
    <div>
      <input value={listName} onChange={(e) => setListName(e.target.value)} />
      <input type="button" value="新增" onClick={addTodo} />
      {state.list.map((list) => {
        return (
          <p key={list.listKey}>
            {/* <input
              type="button"
              value="移除"
              onClick={() => {
                removeTodo(list.listKey);
              }}
            /> */}
            {list.name}
          </p>
        );
      })}
    </div>
  );
};

export default Todo;

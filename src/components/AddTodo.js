import React from 'react';
import { useApolloClient, useMutation } from '@apollo/client';
import { GET_TODOS, ADD_TODO } from '../graphql/todos';

function AddTodoFun() {
  const client = useApolloClient();
  let input;

  // update callback 用於更新緩存
  const updateCallback = (cache, { data: { addTodo } }) => {
    console.log('updateCallback: ', cache, addTodo);

    // 讀取本地緩存
    const { todos } = client.readQuery({ query: GET_TODOS });

    // 寫入緩存
    client.writeQuery({
      query: GET_TODOS,
      data: { todos: todos.concat([addTodo]) } // 將 更新的資料與本地緩存結合
    });
  };

  // useMutation 第二個參數使用 update 屬性，改變本地緩存更新 list
  const [addTodoHandler] = useMutation(ADD_TODO, { update: updateCallback });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodoHandler({ variables: { type: input.value } });
          input.value = '';
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodoFun;

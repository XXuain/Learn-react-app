import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_TODOS, UPDATE_TODO } from '../graphql/todos';

function Todos() {
  const { loading: queryLoading, error: queryError, data } = useQuery(GET_TODOS);
  const [updateTodo, { loading: mutationLoading, error: mutationError }] = useMutation(UPDATE_TODO);

  if (queryLoading) return <p>Loading...</p>;
  if (queryError) return <p>Error :(</p>;

  return data.todos.map(({ id, type }) => {
    let input;

    return (
      <div key={id}>
        <p>{type}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateTodo({ variables: { id, type: input.value } });

            input.value = '';
          }}
        >
          <input
            ref={(node) => {
              input = node;
            }}
          />
          <button type="submit">Update Todo</button>
        </form>
        {mutationLoading && <p>Loading...</p>}
        {mutationError && <p>Error :( Please try again</p>}
      </div>
    );
  });
}

export default Todos;

const initState = {
  todos: [
    { id: 1, text: '買牛奶', groupid: 'living' },
    { id: 2, text: '繳電話費', groupid: 'living' },
    { id: 3, text: '去銀行', groupid: 'living' },
    { id: 4, text: '內部會議', groupid: 'work' },
    { id: 5, text: '回信', groupid: 'work' },
    { id: 6, text: '拜訪客戶', groupid: 'work' },
    { id: 7, text: '家長會', groupid: 'family' },
  ]
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.payload.text,
            groupid: action.payload.groupid,
          }
        ]
      })
    case 'REMOVE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      })

    default:
      return state;
  }
}

export default todoReducer;
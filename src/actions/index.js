// 建立
export const createTodo = text => {
    return {
        type: 'CREATE_TODO',
        payload: { text, groupid }
    }
}

// 刪除
export const removeTodo = id => {
    return {
        type: 'REMOVE_TODO',
        payload: { id }
    }
}
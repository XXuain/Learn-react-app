const initState = {
    todos: [
        { text: '買牛奶', groupid: 'living' },
        { text: '繳電話費', groupid: 'living' },
        { text: '去銀行', groupid: 'living' },
        { text: '內部會議', groupid: 'work' },
        { text: '回信', groupid: 'work' },
        { text: '拜訪客戶', groupid: 'work' },
        { text: '家長會', groupid: 'family' },
    ]
};

const todoReducer = (state = initState, action) => {
    return state;
}

export default todoReducer;
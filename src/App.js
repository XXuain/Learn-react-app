import React, { Component } from 'react';

import AllGroupsTabContent from './components/AllGroupsTabContent';
import GroupTabContent from './components/GroupTabContent';
import GroupSwitch from './components/GroupSwitch';

class App extends Component {
  constructor() {
    super();
    // 代辦事項清單
    let list = [
      { text: '買牛奶', groupId: 'living' },
      { text: '繳電話費', groupId: 'living'},
      { text: '去銀行', groupId: 'living'},
      { text: '會議', groupId: 'work'},
      { text: '拜訪客戶', groupId: 'work'},
      { text: '家長會', groupId: 'family'},
      { text: '家長會', groupId: 'family'},
    ];
    // 代辦事項清單
    const groups = [
      { name: '全部', id: undefined },
      { name: '生活', id: 'living' },
      { name: '工作', id: 'work' },
      { name: '家庭', id: 'family' },
    ];
    this.state = {
      todos: list,
      groups,
      activeGroupId: undefined, // 目前選取的分類
    }
  }
  createTodo(newtodotext, groupId) {
    const newTodo = {
      text: newtodotext,
      groupId: groupId || this.state.activeGroupId
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }
  removeTodo(removingtodo) {
    const newTodos = this.state.todos.filter((todo, index)=> {
      return !(todo.groupId == removingtodo.groupId && 
        removingtodo.text === todo.text)
    });
    this.setState({
      todos: newTodos
    })
  }
  switchGroup(groupId) {
    this.setState({
      activeGroupId: groupId
    })
  }

  render() {
    const todos = this.state.activeGroupId ? this.state.todos.filter((todo, index) => {
      return todo.groupid === this.state.activeGroupId;
    }) : this.state.todos;

    // 若有選取分類渠組，則顯示群組分類元件，若沒有選取，則顯示全部待辦事項分類
    const tabContent = this.state.activeGroupId ? 
      (<GroupTabContent 
        todos={todos} 
        createTodo={(newtodo, groupid) => this.createTodo(newtodo, groupid)} 
        removeTodo={(todo) => this.removeTodo(todo)} 
      />) 
      : 
      (<AllGroupsTabContent 
        todos={todos} 
        removeTodo={(todo) => this.removeTodo(todo)} 
      />);

    return (
      <div>
        <GroupSwitch
          groups={this.state.groups}
          activeGroupId={this.state.activeGroupId}
          switchGroup={(groupId) => this.switchGroup(groupId)}
        />  
        <div>
          {tabContent}
        </div>
      </div>
    );
  }
}

export default App;

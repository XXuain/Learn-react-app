import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import AllGroupsTabContent from './components/AllGroupsTabContent';
import GroupTabContent from './components/GroupTabContent';
import GroupSwitch from './components/GroupSwitch';

class App extends Component {

  constructor() {
    super();
    // 待辦事項清單
    let todos = [
      { text: '買牛奶', groupid: 'living' },
      { text: '繳電話費', groupid: 'living' },
      { text: '去銀行', groupid: 'living' },
      { text: '內部會議', groupid: 'work' },
      { text: '回信', groupid: 'work' },
      { text: '拜訪客戶', groupid: 'work' },
      { text: '家長會', groupid: 'family' },
    ];
    // 待辦事項分類
    let groups = [
      { name: '全部', id: undefined },
      { name: '生活', id: 'living' },
      { name: '工作', id: 'work' },
      { name: '家庭', id: 'family' }
    ];

    this.state = {
      todos: todos,
      groups: groups,
      // 目前選取中的分類
      activeGroupId: undefined,
    }
  }

  createTodo(newtodotext, groupid) {

    const newtodo = {
      text: newtodotext,
      groupid: groupid || this.state.activeGroupId
    }

    this.setState({
      todos: [...this.state.todos, newtodo]
    })
  }

  removeTodo(removingtodo) {
    const newtodos = this.state.todos.filter((todo, index) => {
      return !(todo.groupid === removingtodo.groupid &&
        removingtodo.text === todo.text)
    });
    this.setState({
      todos: newtodos
    })
  }

  switchGroup(groupid) {
    this.setState({
      activeGroupId: groupid
    })
  }


  render() {
    return (
      <Router>
        <div>
          <Route exact path="/"
            render={() => {
              return (
                <div>
                  <GroupSwitch
                    groups={this.state.groups}
                    activeGroupId={undefined}
                    switchGroup={(groupid) => this.switchGroup(groupid)}
                  />
                  <AllGroupsTabContent
                    todos={this.state.todos}
                    removeTodo={(todo) => this.removeTodo(todo)}
                  />
                </div>
              );

            }}
          />


          <Route exact path="/group/:id"
            render={({ match }) => {
              const todos = this.state.todos.filter((todo, index) => {
                return todo.groupid === match.params.id;
              })
              return (
                <div>
                  <GroupSwitch
                    groups={this.state.groups}
                    activeGroupId={match.params.id}
                    switchGroup={(groupid) => this.switchGroup(groupid)}
                  />
                  <GroupTabContent
                    todos={todos}
                    createTodo={(newtodo, groupid) => this.createTodo(newtodo, groupid)}
                    removeTodo={(todo) => this.removeTodo(todo)}
                  />
                </div>
              );

            }}
          />

        </div>

      </Router>
    );
  }
}

export default App;

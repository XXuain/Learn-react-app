import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form'
import List from './components/List'

class App extends Component {

  constructor() {
    super();
    let list = [
      {id: 0, text: '買牛奶'},
      {id: 1, text: '繳電話費'},
      {id: 2, text: '去銀行'},
    ];
    this.state = {
      todos: list,
      startId: 3
    }
  }
  createTodo(text) {
    this.setState({
      todos: [...this.state.todos, {
        id: this.state.startId,
        text
      }],
      startId: this.state.startId + 1
    })
  }
  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => id !== todo.id)
    })
  }
  render() {
    return (
      <div>
          <Title todos={this.state.todos}/>
          <Form createTodo={text=>this.createTodo(text)}/>
          <List todos={this.state.todos} removeTodo={ text => this.removeTodo(text) }/>
      </div>
    );
  }
}

export default App;

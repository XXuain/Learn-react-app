import React, { Component } from 'react';
import Title from './components/Title';

class App extends Component {

  constructor() {
    super();
    let todos = ['買牛奶', '繳電話費', '去銀行'];
    this.state = {
      todos: todos,
    }
  }

  createTodo(newtodo) {
    this.setState({
      todos: [...this.state.todos, newtodo]
    })
  }

  render() {
    return (
      <div>
          <Title todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;

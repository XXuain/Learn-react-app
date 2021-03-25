import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form'
import List from './components/List'

class App extends Component {

  constructor() {
    super();
    let list = ['買牛奶', '繳電話費', '去銀行'];
    this.state = {
      todos: list,
    }
  }

  
createTodo(text) {
  this.setState({
    todos: [...this.state.todos, text]
  })
}
  render() {
    return (
      <div>
          <Title todos={this.state.todos}/>
          <Form createTodo={text=>this.createTodo(text)}/>
          <List todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;

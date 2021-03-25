import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class List extends Component {
    render() {
        return (
            <div>
                {
                    this.props.todos.map((todo) => {
                        return (
                            <TodoItem key={todo.id} todo={todo} removeTodo={id => this.props.removeTodo(id)}/>
                            // <li 
                                
                            //     onClick={() => this.props.removeTodo(todo.id)}
                            // >
                            //     {todo.text}
                            // </li>
                        )
                    })
                }
            </div>
        )
    }
}
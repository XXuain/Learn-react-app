import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            text: 'over school'
        }
        this.createTodo() = this.createTodo.bind(this)
    }
    createTodo() {
        this.props.createTodo(this.state.text)
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <input />
                {/* <button
                    onClick={()=> this.props.createTodo(this.state.text)}
                >新增</button> */}
                <button
                    onClick={this.createTodo}
                >新增</button>
            </div>
        )
    }
}
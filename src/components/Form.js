import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            text: ''
        }
        this.createTodo = this.createTodo.bind(this)
    }
    createTodo() {
        if(this.state.text) {
            this.props.createTodo(this.state.text)
            this.setState({ text: '' })
        }
    }
    handlerChange(e) {
        this.setState({ text: e.target.value })
    }
    handlerKeyDown(e) {
        e.keyCode === 13 && this.createTodo()
    }
    render() {
        return (
            <div>
                <input 
                    onChange={e => this.handlerChange(e)}
                    onKeyDown={e => this.handlerKeyDown(e)}
                    value={this.state.text}
                />
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
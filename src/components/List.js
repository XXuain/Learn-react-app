import React, { Component } from 'react'

export default class List extends Component {
    render() {
        return (
            <ol>
                {
                    this.props.todos.map((todo, index) => {
                        return (
                            <li key={index}>{todo}</li>
                        )
                    })
                }
            </ol>
        )
    }
}
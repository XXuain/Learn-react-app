import React, { Component } from 'react'
import styled from 'styled-components'

const TodoItemWrap = styled.div`
    color: black;
    cursor: pointer;
    border-bottom: 1px solid black;
    margin: 10px 0px;
`;

const TodoItemText = styled.h3`
    color: ${props => props.color || 'black'};
    margin: 0px;
`;

export default class TodoItem extends Component {
    getTime = () => {
        const now = new Date();
        const hour = now.getHours();
        return (hour >= 18 && hour <= 24) || (hour >= 0 && hour <= 6) ? 'black' : 'red';
    }
    render() {
        const color = this.getTime();
        return (
            <TodoItemWrap
                onClick={() => this.props.removeTodo(this.props.todo.id)}
            >
                <TodoItemText color={color}>
                    {this.props.todo.text}
                </TodoItemText>
            </TodoItemWrap>
        )
    }
}

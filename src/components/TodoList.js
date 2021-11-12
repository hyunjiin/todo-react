import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const {todos, onSelect} = this.props;
    const TodoList = todos.map((todo, index)=>{
      return <span onClick={()=>onSelect(todo.id)} key={index}><TodoItem key={todo.id} todo={todo} /></span>
    })
    
    return (
      <div>
        <h3>일 정 목 록</h3>{
          // todos.length === 0 ? "Empty" : ({TodoList})
          Array.isArray(todos) && todos.length ? TodoList : "Empty"
        }
      </div>
    );
  }
}

export default TodoList;
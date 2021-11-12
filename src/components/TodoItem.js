import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const {todo} = this.props;
    return (
      <div>
        <h4>{todo.title}</h4>
      </div>
    );
  }
}

export default TodoItem;
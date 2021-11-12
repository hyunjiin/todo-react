import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
    const {todo, onAdd, onRemove, onModify, onSetProps } = this.props;
    return (
      <div>
        Title : <input type="text" name="title" value={todo.title} placeholder="일정입력" 
          onChange={(e)=>onSetProps(e.target.name, e.target.value)}/><br/>
        <button onClick={()=>onAdd()}>추가</button>
        <button onClick={()=>onRemove()}>삭제</button>
        <button onClick={()=>onModify()}>수정</button>
      </div>
    );
  }
}

export default TodoInput;
import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import generateId from './IDGenerator';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo : {id: "", title : ""},
      todos : []
    }
  }

  handlerAdd = ()=>{
    const {todo, todos} = this.state;
    this.setState({
      todo : todo,
      todos : todos.concat({...todo, id: generateId(5)}),
    });
  }

  handlerSelect = (id)=>{
    const {todos} = this.state;
    this.setState({
      todo : todos.find((element)=>element.id === id)
    });
  }

  // ...는 기존의값을 쓴다는 의미
  // handelrtSetTodo = (title)=>{
  //   this.setState({
  //     todo : {...this.state.todo, title : title}
  //   });
  // }

  handelrtSetProps = (name, value)=>{
    this.setState({
      todo : {...this.state.todo, [name] : value}
    });
  }

  handlerModify = ()=>{
    const {todo, todos} = this.state;
    this.setState({
      todos : todos.map((element)=>(element.id === todo.id ? todo : element))
    });
  }

  // 선택한 element 제외
  handelerRemove = ()=>{
    const {todo, todos} = this.state;
    this.setState({
      todos : todos.filter((element)=>element.id !== todo.id)
    });
  }

  render() {
    const {todo} = this.state;
    return (
      <div>
        <TodoInput todo={todo} 
          onAdd={this.handlerAdd} onModify={this.handlerModify} onRemove={this.handelerRemove} onSetProps={this.handelrtSetProps}/>
        <TodoList onSelect={this.handlerSelect} todos = {this.state.todos}/>
      </div>
    );
  }
}

export default App;
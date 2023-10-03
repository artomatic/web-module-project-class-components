import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todoList.map ( (td, index) => 
          <Todo 
          key={index} 
          todo={td.name} 
          id={td.id} 
          handleCheckClick={this.props.handleCheckClick}
          completed = {td.completed}
          hide={this.props.hide}/>
        ) }
      </div>
    )
  }
}

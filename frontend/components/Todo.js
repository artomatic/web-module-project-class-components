import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div 
      onClick={this.props.handleCheckClick} 
      id={this.props.id}
      name={this.props.todo} >
        {this.props.todo} {this.props.completed && '✅'}
      </div>
    )
  }
}

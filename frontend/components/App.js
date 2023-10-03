import React from 'react'
import Form from './Form'
import TodoList from './TodoList'
import Todo from './Todo'



export default class App extends React.Component {

  constructor () {
    super();
    this.state = {

      todoList: [],
      typedInput: '',
      hide: false
    }
  }

  handleInputChange = (event) => {
    const value = event.target.value
    this.setState({typedInput: value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    let newTodo = {
      name: this.state.typedInput,
      id: this.state.todoList.length,
      completed: false
      }
    this.setState({todoList: [...this.state.todoList, newTodo]} )
    this.setState({typedInput: ''})
  }
  handleHideClick = () => {
    this.setState({hide: !this.state.hide})
  }
  handleCheckClick = (event) => {
    let id = event.target.id
    const updatedTodoList = [...this.state.todoList]
    updatedTodoList[id].completed = !updatedTodoList[id].completed
    this.setState({todoList: updatedTodoList})
  }

  render() {
    return (
      <div>
        <h2>Todos:</h2>
        <TodoList todoList={this.state.todoList} handleCheckClick={this.handleCheckClick} hide={this.state.hide}/>
        <Form 
        typedInput={this.state.typedInput} 
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        handleHideClick={this.handleHideClick}
        hide={this.state.hide}/>

      </div>
      
    )
  }
}

import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <input 
            type='text' 
            placeholder='Type todo' 
            onChange={this.props.handleInputChange}
            value={this.props.typedInput}/>
            <button type='submit'>Add Todo</button>
          </div>
          <br/>
          <div>
            <button onClick={this.props.handleHideClick}>Clear Completed</button>
          </div>
        </form>
        
      </div>
    )
  }
}

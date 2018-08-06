import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'

class Todos extends Component {
  render() {
    let oneTodoItem;
    if(this.props.todos){
    	oneTodoItem = this.props.todos.map((todo)=>{
    		// console.log(todo);
    		return <TodoItem key={todo.title} todo={todo}/>
    	});
    }

    return (
      <div className="Todos">
      <br/>
      <h3>Todos:</h3>
        <ol>
        	{oneTodoItem}
      	</ol>
      </div>
    );
  }
}

// Validating component properties
Todos.propTypes = {
  todos : PropTypes.array
};

export default Todos;

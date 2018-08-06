import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
  render() {
    return (
      <li className="TodoItem" id={this.props.todo.id}>
       <strong>{this.props.todo.title}</strong> - {this.props.todo.userId}
      </li>
    );
  }
}

// Validating component properties
TodoItem.propTypes = {
  todo : PropTypes.object
};

export default TodoItem;
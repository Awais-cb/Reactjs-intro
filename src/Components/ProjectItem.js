import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ProjectItem extends Component {
  // this function is created to parse element id to its parent component
  deleteProject(id){
  	// console.log(id);
  	this.props.onDelete(id);
  }
  render() {
    return (
      <li className="ProjectItem" id={this.props.project.id}>
       <strong>{this.props.project.title}</strong> - {this.props.project.category} <a href='#' onClick={this.deleteProject.bind(this,this.props.project.id)}>x</a>
      </li>
    );
  }
}

// Validating component properties
ProjectItem.propTypes = {
  project : PropTypes.object,
  onDelete : PropTypes.func
};

export default ProjectItem;
import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types'

class Projects extends Component {
  deleteProjectItem(id){
    this.props.onDelete(id);
  }
  render() {
    let oneProjectItem;
    if(this.props.projects){
    	oneProjectItem = this.props.projects.map((project)=>{
    		// console.log(project);
    		return <ProjectItem onDelete={this.deleteProjectItem.bind(this)} key={project.title} project={project}/>
    	});
    }

    return (
      <div className="Projects">
      <br/>
      <h3>Projects:</h3>
        <ol>
        	{oneProjectItem}
      	</ol>
      </div>
    );
  }
}

// Validating component properties
Projects.propTypes = {
  projects : PropTypes.array,
  onDelete : PropTypes.func
};

export default Projects;

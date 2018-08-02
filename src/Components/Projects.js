import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  render() {
    let oneProjectItem;
    if(this.props.projects){
    	oneProjectItem = this.props.projects.map((project)=>{
    		// console.log(project);
    		return <ProjectItem key={project.title} project={project}/>
    	});
    }

    return (
      <div className="Projects">
        <ol>
        	{oneProjectItem}
      	</ol>
      </div>
    );
  }
}

export default Projects;

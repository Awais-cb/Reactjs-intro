import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types'

class AddProject extends Component {
  constructor(){
    super();
    this.state={
      newProject:{}
    }
  }
  static defaultProps = {
    categories: ['Web Design','Web Development','Mobile Development']
  }
  handleSubmit(e){
    e.preventDefault();
    if(this.refs.title.value === '' || this.refs.category.value === ''){
      alert('Fill in all required fields');
    }else{
      // console.log('submited');
      this.setState({
            newProject:{
              id:uuid.v4(),
              title:this.refs.title.value,
              category:this.refs.category.value
            }
      },function (argument) {
        // console.log(this.state);
        // sending data to main main state containing all projects in App.js
        this.props.addProject(this.state.newProject);
      });
    }
  }
  render() {
    let oneCategory;
    oneCategory = this.props.categories.map((category)=>{
        return <option key={category} value={category} >{category}</option>
    }); 
    return (
      <div className="AddProject">
        <h2>Add Project</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <div className="form-group">
              <label htmlFor='title'>Title : </label><input className='form-control' type='text' ref='title' />
            </div>
            <div className="form-group">
              <label htmlFor='category'>Category : </label>
              <select className='form-control' ref='category'>
                {oneCategory}
              </select>
            </div>
            <input className='btn btn-dafault' type='submit' value=' Submit '/>
          </div>
        </form>
      </div>
    );
  }
}

// Validating component properties
AddProject.propTypes = {
  categories : PropTypes.array,
  addProject : PropTypes.func
};

export default AddProject;

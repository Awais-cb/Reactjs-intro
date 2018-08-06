import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import './App.css';

class App extends Component {
  // defining state
  constructor(){
    // in a constructor this can't be used without calling super();
    super();
      this.state = {
        // we actually don't add up data array directly into our state in constructor as alternative we will use this.setState
        // initializing data arrays
        projects:[],
        todos:[]
      }
    }
    // getting todos from api using jquery
    getTodos(){
      $.ajax({
        url:'https://jsonplaceholder.typicode.com/todos',
        dataType:'json',
        cache:'false',
        success:function (data) {
          this.setState({todos:data},function () {
            // callback function added to test if data is comming
            console.log(this.state);
          });
        }.bind(this),
        error:function (xhr,status,err) {
          console.log(err);
        }
      });
    }
    getProjects(){
      this.setState({
          projects : [
          {
            'id':uuid.v4(),
            'title':'Business Website',
            'category':'Web design'
          },
          {
            'id':uuid.v4(),
            'title':'School Website',
            'category':'Web design'
          },
          {
            'id':uuid.v4(),
            'title':'Park Website',
            'category':'Data mining'
          },
          {
            'id':uuid.v4(),
            'title':'Hotel Website',
            'category':'Data scrapping'
          },
          {
            'id':uuid.v4(),
            'title':'College Website',
            'category':'Web development'
          }
        ]
      },function () {
          // callback function added to test if data is comming
          console.log(this.state);        
      });
    }
    // getting data objects
    componentWillMount(){
      this.getProjects();
      this.getTodos();
    }
    // fetching data from apis in lifecycle
    componentDidMount(){
      // this.getTodos();
    }
    handleAddProject(project){
      // console.log(project);
      // console.log(this.state.projects);
      let projects = this.state.projects;
      projects.push(project);
      this.setState({projects:projects});
    }
    handleDeleteProject(id){
      let projects = this.state.projects;
      // finding index and passing it to variable index
      let index = projects.findIndex(x => x.id === id);
      projects.splice(index,1);
      this.setState({projects:projects});
    }  
  // redering content to webpage
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <h1 className="App-title">ReactJS demo app</h1>
        </header>
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <hr />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;

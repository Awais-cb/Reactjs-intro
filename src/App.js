import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  // defining state
  constructor(){
    // in a constructor this can't be used without calling super();
    super();
      this.state = {
        // we actually don't add up data array directly into our state in constructor as alternative we will use this.setState
        projects:[]
      }
    }
    componentWillMount(){
        this.setState({
          projects : [
                    {
                      'title':'Business Website',
                      'category':'Web design'
                    },
                    {
                      'title':'School Website',
                      'category':'Web design'
                    },
                    {
                      'title':'Park Website',
                      'category':'Data mining'
                    },
                    {
                      'title':'Hotel Website',
                      'category':'Data scrapping'
                    },
                    {
                      'title':'College Website',
                      'category':'Web development'
                    }
                ]
              });
      }
      handleAddProject(project){
        // console.log(project);
        let projects = this.state.pojects;
        projects.push(project);
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
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;

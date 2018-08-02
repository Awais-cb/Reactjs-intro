import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
  // defining state
  constructor(){
    // in a constructor this can't be used without calling super();
    super();
    this.state = {
      projects:[
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
          },
        ]
      }
  }
  // redering content to webpage
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ReactJS demo app</h1>
        </header>
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app">
      <div className="toolbar">
        <button className="toolbar-button">New</button>
        <button className="toolbar-button">Delete</button>
        <input className="toolbar-search" type="text" placeholder="Search..."></input>
      </div>
      
      </div>
    )
  }
}


export default App;

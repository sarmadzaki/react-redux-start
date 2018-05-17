import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Todo from '../Todo/todo'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React and Redux</h1>
        </header>
        <Todo />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Login from '../Auth/Login';
import {databaseRef} from '../../config/firebase'
class App extends Component {
  constructor(props) {
    super(props);
console.log('FIREBASE INITIALIZED', databaseRef)
  }
  render() {
    return (
      <div className="App">
       <Login />
      </div>
    );
  }
}

export default App;

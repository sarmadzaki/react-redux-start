import React, { Component } from 'react';
import './App.css';
import Auth from '../Auth/Auth-Container';

class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="App">
       <Auth />
      </div>
    );
  }
}

export default App;

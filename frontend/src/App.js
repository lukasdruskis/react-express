import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestContainer from './containers/TestContainer'

class App extends Component {
   
    render() {
      return (
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <TestContainer />
        </div>
      );
    }
  }
  
  export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/Test'

class App extends Component {
  state = {
      data: null
    };
  
      // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js

    render() {
      return (
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <Test/>
        </div>
      );
    }
  }
  
  export default App;

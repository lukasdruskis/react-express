import React, { Component } from 'react';
import './App.css';
import TestContainer from './containers/TestContainer'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class App extends Component {
   
    render() {
      return (
        <Router>
        <div>
          <ul>
            <li>
              <Link to="/1"> Pirmas puslapis </Link>
            </li>
            <li>
              <Link to="/2"> Antras puslapis </Link>
            </li>

            <div className="App">
          <TestContainer />

          <Route exact path='/1' component={FirstComponent}></Route>
          <Route exact path='/2' component={SecondComponent}></Route>
        </div>
          </ul>
        </div>
      </Router>

      );
    }
  }
  
  export default App;

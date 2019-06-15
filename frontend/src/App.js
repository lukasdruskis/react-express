import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import FirstComponent from './components/FirstComponent'
import RatingContainer from './containers/RatingContainer'
import SearchContainer from './containers/SearchContainer'
import FilterContainer from './containers/FilterContainer'
class App extends Component {
   
    render() {
      return (
        <Router>
        <div>
          <h1> Lukas Druskis </h1>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/1"> Reitingavimas </Link>
            </li>
            <li>
              <Link to="/2"> Tekstinė paieška </Link>
            </li>
            <li>
              <Link to="/3"> Filtrų paieška </Link>
            </li>
            <div className="App">
          <Route exact path='/' component={FirstComponent}></Route>
          <Route exact path='/1' component={RatingContainer}></Route>
          <Route exact path='/2' component={SearchContainer}></Route>
          <Route exact path='/3' component={FilterContainer}></Route>
        </div>
          </ul>
        </div>
      </Router>

      );
    }
  }
  
  export default App;

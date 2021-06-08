import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Homepage from './Homepage';
import About from './About';
import Work from './Work';
import Project from './Project';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={Homepage}
          />
          <Route
            exact
            path="/home"
            component={Homepage}
          />
          <Route
            exact
            path="/about"
            component={About}
          />
          <Route
            exact
            path="/work"
            component={Work}
          />
          <Route
            exact
            path="/project"
            component={Project}
          />
        </Switch>          
      </Router>
    </div>
  );
}

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Homepage from './Homepage';

export default class App extends React.Component {

  render() {
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
          </Switch>
        </Router>
      </div>
    );
  }
}

/* Packages */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Containers */
import Dashboard from './containers/Dashboard/Dashboard';
import Website from './containers/Website/Website';


/* Css */
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Website />
          </Route>


        </Switch>

      </div>
    </Router>
  );
}

export default App;

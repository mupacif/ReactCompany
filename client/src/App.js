/* Packages */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {ProvideAuth } from './components/context/auth-context';
import {ProvideParse} from './components/context/parse-context';
/* Containers */
import Dashboard from './containers/Dashboard/Dashboard';
import Website from './containers/Website/Website';


/* Css */
import './App.css';

function App() {
  return (
    <ProvideParse>
      <ProvideAuth>
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
      </ProvideAuth>
    </ProvideParse>
  );
}

export default App;

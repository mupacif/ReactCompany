/* Packages */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
/* Containers */
import Home from './Home/Home';

/* Components */
import Navbar from './../../components/NavBar/NavBar';

class Website extends Component {
  render() {
    return(
      <div className="website">
        <Navbar />
        <Switch>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>


        </Switch>
      </div>
    );
  }
}

export default Website;

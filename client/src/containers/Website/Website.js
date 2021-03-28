/* Packages */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


/* Containers */
import Home from './Home/Home';

/* Components */
import Navbar from './../../components/NavBar/NavBar';
import LoginModal from './../../components/Modals/LoginModal/LoginModal';
import RegisterModal from './../../components/Modals/LoginModal/Register';
import ResetPwdModal from './../../components/Modals/LoginModal/forgottenpwd'
class Website extends Component {


  render() {
    return(
      <div className="website">
        <Navbar />
        <LoginModal  />
        <RegisterModal  />
        <ResetPwdModal />
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

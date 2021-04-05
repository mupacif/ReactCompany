/* Packages */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import UIkit from '../../../node_modules/uikit/dist/js/uikit.js';

/* Containers */
import Home from './Home/Home';

/* Components */
import Navbar from './../../components/NavBar/NavBar';
import LoginModal from './../../components/Modals/LoginModal/LoginModal';
import RegisterModal from './../../components/Modals/LoginModal/Register';
import ResetPwdModal from './../../components/Modals/LoginModal/forgottenpwd';
import ResendMailConfirmModal from './../../components/Modals/LoginModal/resendMail'
class Website extends Component {

  closeModal = () => {
    UIkit.modal('#login-modal').hide();
  }

  render() {
    return(
      <div className="website">
        <Navbar />
        <LoginModal  />
        <RegisterModal  />
        <ResetPwdModal /> 
        <ResendMailConfirmModal />
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

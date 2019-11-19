/* Packages */
import React from 'react';
import { Link } from 'react-router-dom';

const loginModal = (props) => {
  return(
    <div id="login-modal" data-uk-modal>
      <div className="uk-modal-dialog">
          <button className="uk-modal-close-default" type="button" data-uk-close></button>

          <div className="uk-modal-header">
            <h2>Log in</h2>
          </div>

          <div className="uk-modal-body">
            <form>
              <div className="uk-margin">
                <label>Username</label>
                <input className="uk-input" type="text" />
              </div>
              <div className="uk-margin">
                <label>Password</label>
                <input className="uk-input" type="text" />
              </div>
            </form>
          </div>

          <div className="uk-modal-footer uk-text-right">
            <Link to="/dashboard" onClick={ props.login } className="uk-button uk-button-primary" type="button">Save</Link>
          </div>
      </div>
    </div>
  );
}

export default loginModal;

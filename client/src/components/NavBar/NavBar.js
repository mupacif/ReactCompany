import React from 'react';
import { useAuth } from '../context/auth-context';
function NavBar() {
  let auth = useAuth();
  return (
        <nav className="uk-navbar-container" data-uk-navbar>
          <div className="uk-navbar-right">
            {!auth.user.authenticated ?
              <ul className="uk-navbar-nav">
              <li><a data-uk-toggle="target: #login-modal">Log in</a></li>
              <li><a data-uk-toggle="target: #register-modal">Sign up</a></li>
              </ul>
              :
              <ul className="uk-navbar-nav">
              <li><a onClick={ auth.signout }>Logout</a></li>
              </ul>
             }

          </div>
        </nav>
  );
}

export default NavBar;

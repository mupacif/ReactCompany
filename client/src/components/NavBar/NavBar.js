import React from 'react';
import { Link } from 'react-router-dom';

function navBar() {
  return (
    <nav className="uk-navbar-container" data-uk-navbar>
      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          <li><a data-uk-toggle="target: #login-modal">Log in</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default navBar;

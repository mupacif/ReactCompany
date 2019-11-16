import React from 'react';
import { Link } from 'react-router-dom';

function navBar() {
  return (
    <nav>
      <div className="navbar-left"></div>
      <div className="navbar-right">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default navBar;

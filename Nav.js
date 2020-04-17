import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <h2>
        <Link to="/">Nav</Link>
        </h2>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
  );
}

export default Nav;
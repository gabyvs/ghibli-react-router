import React  from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Movies</li>
        <li>People</li>
      </ul>
    </nav>
  </header>
);

export default Header;
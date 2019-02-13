import React  from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="container">
      <ul>
        <li><Link to="/"><div className="clickable">Home</div></Link></li>
        <li><Link to="/movies"><div className="clickable">Movies</div></Link></li>
        <li><Link to="/people"><div className="clickable">People</div></Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
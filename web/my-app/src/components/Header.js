import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    
    <header>
      <nav>
      <h1>Madhurisha Website</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/catalog">Catalog</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/registration">Register</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

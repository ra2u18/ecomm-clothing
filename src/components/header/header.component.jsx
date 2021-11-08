import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <NavLink to="/shop" className="option" activeClassName="selectedOption">
          SHOP
        </NavLink>
        <NavLink to="/contact" className="option" activeClassName="selectedOption">
          CONTACT
        </NavLink>
        <NavLink to="/login" className="option" activeClassName="selectedOption">
          SIGN IN
        </NavLink>
      </div>
    </div>
  );
};

export default Header;

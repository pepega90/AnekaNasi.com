import React from 'react';
import {NavLink} from 'react-router-dom';

const navbar = props => (
  <div
    className="navbar is-info"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <h1
        className="title"
        style={{color: '#fff', padding: '5px 0', margin: '0 2rem'}}
      >
        AnekaNasi.com
      </h1>
      <a
        onClick={props.click}
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <NavLink to="/" className="navbar-item">
          Home
        </NavLink>
        <NavLink to="/cart" className="navbar-item">
          Keranjang
        </NavLink>
      </div>
    </div>
  </div>
);

export default navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';

const navbar = props => {
  let classMenu = ['navbar-menu'];
  if (props.show) {
    classMenu = ['navbar-menu', 'is-active'];
  }

  return (
    <div
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation">
      <div className="navbar-brand">
        <h1 className="title" style={{ padding: '15px 0', margin: '0 2rem' }}>
          AnekaNasi.com
        </h1>
        <a
          onClick={props.click}
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={classMenu.join(' ')}>
        <div className="navbar-start">
          <NavLink onClick={props.tutup} to="/" className="navbar-item">
            Home
          </NavLink>
          <NavLink onClick={props.tutup} to="/cart" className="navbar-item">
            Keranjang
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default navbar;

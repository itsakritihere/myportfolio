import React from 'react';
import './Nav.css';

const Nav = props => {
  return (
    <>
      <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand">
            Akriti's Portfolio
          </p>

          <button
            type="button"
            onClick={props.toggleMenu}
            className={props.showMenu === 'active'
              ? 'menu-button active'
              : 'menu-button'}
            aria-label="Toggle menu"
          >
            <span />
          </button>

        </div>
      </nav>
    </>
  );
};

export default Nav;
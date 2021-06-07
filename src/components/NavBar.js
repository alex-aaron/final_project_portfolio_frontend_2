import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/most_comments" className="nav-link">Most Comments</NavLink></li>
            <li className="nav-item"><NavLink to="/awards" className="nav-link">Awards</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
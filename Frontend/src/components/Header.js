import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingCart, FaUser } from "react-icons/fa"; // Import icons
import './Header.css';

function Header() {
  return (
    <div className="card text-center">
      <div className="card-header header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <NavLink exact to="/home" className="nav-link" activeClassName="active">
              <FaHome className="icon" /> Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/cart" className="nav-link" activeClassName="active">
              <FaShoppingCart className="icon" /> Cart
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/account" className="nav-link" activeClassName="active">
              <FaUser className="icon" /> Account
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

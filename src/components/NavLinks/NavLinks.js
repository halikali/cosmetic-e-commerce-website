import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.scss";

const NavLinks = ({ children }) => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list-item">
          <NavLink to={"/"} className="navbar__link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="navbar__list-item">
          <NavLink
            to={"/shop"}
            className="navbar__link"
            activeClassName="active"
          >
            Shop
          </NavLink>
        </li>
        <li className="navbar__list-item">
          <NavLink
            to={"/features"}
            className="navbar__link"
            activeClassName="active"
          >
            Features
          </NavLink>
        </li>
        <li className="navbar__list-item">
          <NavLink
            to={"/lookbook"}
            className="navbar__link"
            activeClassName="active"
          >
            Lookbook
          </NavLink>
        </li>
        <li className="navbar__list-item">
          <NavLink
            to={"/pages"}
            className="navbar__link"
            activeClassName="active"
          >
            pages
          </NavLink>
        </li>
        <li className="navbar__list-item">
          <NavLink
            to={"/blog"}
            className="navbar__link"
            activeClassName="active"
          >
            Blog
          </NavLink>
        </li>
        <li className="navbar__list-item">
          <NavLink
            to={"/buy"}
            className="navbar__link"
            activeClassName="active"
          >
            Buy now
          </NavLink>
        </li>

        {children && children}
      </ul>
    </nav>
  );
};

export default NavLinks;

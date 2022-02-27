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
        <li className="navbar__list-item" activeClassName="active">
          <NavLink to={"/shop"} className="navbar__link">
            Shop
          </NavLink>
        </li>
        <li className="navbar__list-item" activeClassName="active">
          <NavLink to={"/features"} className="navbar__link">
            Features
          </NavLink>
        </li>
        <li className="navbar__list-item" activeClassName="active">
          <NavLink to={"/lookbook"} className="navbar__link">
            Lookbook
          </NavLink>
        </li>
        <li className="navbar__list-item" activeClassName="active">
          <NavLink to={"/pages"} className="navbar__link">
            pages
          </NavLink>
        </li>
        <li className="navbar__list-item" activeClassName="active">
          <NavLink to={"/blog"} className="navbar__link">
            Blog
          </NavLink>
        </li>
        <li className="navbar__list-item" activeClassName="active">
          <NavLink to={"/buy"} className="navbar__link">
            Buy now
          </NavLink>
        </li>

        {children && children}
      </ul>
    </nav>
  );
};

export default NavLinks;

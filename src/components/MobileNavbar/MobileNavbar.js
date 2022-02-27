import React from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";

import NavLinks from "../NavLinks";
import "./MobileNavbar.scss";

const MobileNavbar = ({ isOpen }) => {
  return createPortal(
    <div className={`mobile-navbar ${isOpen ? "opened" : "closed"}`}>
      <NavLinks>
        <li className="navbar__list-item" activeClassName="active">
          <NavLink
            to={"/login"}
            className="navbar__link"
            activeClassName="active"
          >
            Login
          </NavLink>
        </li>
        <li className="navbar__list-item" activeClassName="active">
          <NavLink
            to={"/register"}
            className="navbar__link"
            activeClassName="active"
          >
            Regıster
          </NavLink>
        </li>
        <li className="navbar__list-item" activeClassName="active">
          <NavLink
            to={"/whislist"}
            className="navbar__link"
            activeClassName="active"
          >
            Whıslıst
          </NavLink>
        </li>
      </NavLinks>
    </div>,
    document.getElementById("mobile-navbar")
  );
};

export default MobileNavbar;

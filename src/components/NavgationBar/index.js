import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faGear,
  faHeart,
  faMagnifyingGlass,
  faNavicon,
} from "@fortawesome/free-solid-svg-icons";

import "./navigationBar.scss";

const NavgationBar = () => {
  return (
    <nav className="header">
      <div className="icon__wrapper icon__wrapper--left">
        <FontAwesomeIcon icon={faNavicon} className={"icon icon--nav"} />
        <FontAwesomeIcon icon={faMagnifyingGlass} className={"icon"} />
      </div>

      <p className="header__brand-name">AVONE</p>

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
        </ul>
      </nav>

      <div className="icon__wrapper icon__wrapper--right">
        <FontAwesomeIcon icon={faGear} className={"icon"} />
        <FontAwesomeIcon icon={faHeart} className={"icon icon--heart"} />
        <FontAwesomeIcon icon={faBagShopping} className={"icon"} />
      </div>
    </nav>
  );
};

export default NavgationBar;

// navbar dropdown item example
{
  /* <NavDropdown title="Link" id="navbarScrollingDropdown">
<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
<NavDropdown.Item href="#action4">
  Another action
</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action5">
  Something else here
</NavDropdown.Item>
</NavDropdown> */
}

/* https://react-bootstrap.github.io/components/alerts  => bootstrap componentleri   */

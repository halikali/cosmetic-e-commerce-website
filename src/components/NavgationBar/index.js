import React from "react";
import { Link } from "react-router-dom";
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
            <Link to={"/"} className="navbar__link" activeClassName="selected">
              Home
            </Link>
          </li>
          <li className="navbar__list-item" activeClassName="selected">
            <Link to={"/shop"} className="navbar__link">
              Shop
            </Link>
          </li>
          <li className="navbar__list-item" activeClassName="selected">
            <Link to={"/features"} className="navbar__link">
              Features
            </Link>
          </li>
          <li className="navbar__list-item" activeClassName="selected">
            <Link to={"/lookbook"} className="navbar__link">
              Lookbook
            </Link>
          </li>
          <li className="navbar__list-item" activeClassName="selected">
            <Link to={"/pages"} className="navbar__link">
              pages
            </Link>
          </li>
          <li className="navbar__list-item" activeClassName="selected">
            <Link to={"/blog"} className="navbar__link">
              Blog
            </Link>
          </li>
          <li className="navbar__list-item" activeClassName="selected">
            <Link to={"/buy"} className="navbar__link">
              Buy now
            </Link>
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

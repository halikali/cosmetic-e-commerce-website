import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faClose,
  faGear,
  faHeart,
  faMagnifyingGlass,
  faNavicon,
} from "@fortawesome/free-solid-svg-icons";

import MobileNavbar from "../MobileNavbar";
import NavLinks from "../NavLinks/NavLinks";
import "./navigationBar.scss";

const NavgationBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMobileNavbar = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.getElementById("root").classList.add("navbar-open");
    }
    if (!isOpen) {
      document.getElementById("root").classList.remove("navbar-open");
    }
  }, [isOpen]);

  return (
    <nav className="header">
      <div className="icon__wrapper icon__wrapper--left">
        <FontAwesomeIcon
          icon={!isOpen ? faNavicon : faClose}
          className={"icon icon--nav"}
          onClick={toggleMobileNavbar}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className={"icon"} />
      </div>

      <p className="header__brand-name">AVONE</p>

      <NavLinks />

      <div className="icon__wrapper icon__wrapper--right">
        <FontAwesomeIcon icon={faGear} className={"icon"} />
        <FontAwesomeIcon icon={faHeart} className={"icon icon--heart"} />
        <FontAwesomeIcon icon={faBagShopping} className={"icon"} />
      </div>

      <MobileNavbar isOpen={isOpen} />
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

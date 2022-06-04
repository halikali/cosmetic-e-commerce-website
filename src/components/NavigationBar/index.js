import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faClose,
  faGear,
  faHeart,
  faMagnifyingGlass,
  faNavicon,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

import MobileNavbar from "../MobileNavbar";
import NavLinks from "../NavLinks/NavLinks";
import "./navigationBar.scss";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { products } = useSelector((state) => state.card);
  let [productCount, setProductCount] = useState(0);

  useEffect(() => {
    setProductCount(products.length);
  }, []);

  useEffect(() => {
    setProductCount(products.length);
  }, [products]);

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
        <Link to={"/order"}>
          <FontAwesomeIcon icon={faBagShopping} className={"icon icon--bag"} />
        </Link>
        <p className="icon--bag-count">
          {productCount > 0 ? productCount : ""}
        </p>
      </div>
      <MobileNavbar isOpen={isOpen} />
    </nav>
  );
};

export default NavigationBar;

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

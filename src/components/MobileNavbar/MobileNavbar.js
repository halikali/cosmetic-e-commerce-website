import React from "react";
import { createPortal } from "react-dom";

import "./MobileNavbar.scss";

const MobileNavbar = () => {
  return createPortal(
    <div className="mobile-navbar">MobileNavbar</div>,
    document.getElementById("mobile-navbar")
  );
};

export default MobileNavbar;

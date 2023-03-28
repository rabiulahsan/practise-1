import "./Navbar.css";
import logo from "../../images/Logo.svg";

import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="" />

      <div>
        <a href="">Order</a>
        <a href="">Order Review</a>
        <a href="">Manage Inventory</a>
        <a href="">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;

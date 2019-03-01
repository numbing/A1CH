import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="../">
        <img className="logo" src={Logo} alt="Auto1.com" />
      </Link>
      <div className="navbarLinks">
        <Link className="NavbrarLink" to="/purchase">
          Purchase
        </Link>
        <Link className="NavbrarLink" to="/myorders">
          My Orders
        </Link>
        <Link className="NavbrarLink" to="/sell">
          Sell
        </Link>
      </div>
    </div>
  );
};
export default Navbar;

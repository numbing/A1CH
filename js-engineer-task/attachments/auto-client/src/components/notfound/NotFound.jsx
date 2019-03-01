import React from "react";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="wraper">
        <img className="logo" src={Logo} alt="logo" />
        <h1>404 - Not Found</h1>
        <h3>
          Sorry, the page you are looking for does not exist. You can always go
          back to the{" "}
          <Link className="linkToHomePage" to="../">
            {" "}
            homepage
          </Link>
          .
        </h3>
      </div>
    </div>
  );
};

export default NotFound;

import React from "react";
import { Link } from "react-router-dom";
const Navbar_Git = () => {
  return (
    <div>
      <Link style={{ textDecoration: "none" }} to="/login">
        <div className="header11">
          <h1>Github Profile 😍 </h1>
        </div>
      </Link>
    </div>
  );
};

export default Navbar_Git;

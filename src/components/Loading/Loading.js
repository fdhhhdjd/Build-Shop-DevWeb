import React from "react";
import "./Loading.css";
import logo from "../../Images/logo.png";
const Loading = () => {
  return (
    <>
      <img src={logo} alt="" className="logo-loading" />
      <div className="body1">
        <div className="loader">Loading...</div>
      </div>
    </>
  );
};

export default Loading;

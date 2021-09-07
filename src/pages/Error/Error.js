import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <div className="body">
        <div className="mainbox">
          <div className="err">4</div>
          <i className="far fa-question-circle fa-spin"></i>
          <div className="err2">4</div>
          <div className="msg">
            Page Not Found 😥
            <p>
              Let's go &nbsp;
              <Link to="/" className="go-back">
                Go back &nbsp;🔙
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;

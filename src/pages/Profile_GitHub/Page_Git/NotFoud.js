import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
function NotFound() {
  return (
    <div className="notfound container">
      <FontAwesomeIcon icon={faTimesCircle} className="icon" />
      <h1 className="notfound-header">Nothing found</h1>
    </div>
  );
}

export default NotFound;

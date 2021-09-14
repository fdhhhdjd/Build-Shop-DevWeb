import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faBusinessTime,
  faBlog,
  faPen,
  faClock,
  faWifi,
  faChartBar,
  faMapMarkerAlt,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";

import Moment from "react-moment";
const UseRight = ({ userData }) => {
  return (
    <div className="user-right">
      <div className="user-bio">
        <h1>Information Profile </h1>
        <p>{userData.bio}</p>
      </div>
      <div className="user-location user-secondary-info">
        <FontAwesomeIcon
          icon={faSignature}
          className="font-awesome-user-right"
        />
        {userData.name ? (
          <h3>{userData.name}</h3>
        ) : (
          <h3 className="notfound-alert">Not Found</h3>
        )}
      </div>
      <div className="user-location user-secondary-info">
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          className="font-awesome-user-right"
        />
        {userData.location ? (
          <h3>{userData.location}</h3>
        ) : (
          <h3 className="notfound-alert">Not Found</h3>
        )}
      </div>
      <div className="user-company user-secondary-info">
        <FontAwesomeIcon
          icon={faChartBar}
          className="font-awesome-user-right"
        />
        {userData.company ? (
          <h3>{userData.company}</h3>
        ) : (
          <h3 className="notfound-alert">Not Found</h3>
        )}
      </div>
      <div className="user-blog user-secondary-info">
        <FontAwesomeIcon icon={faWifi} className="font-awesome-user-right" />
        {userData.blog ? (
          <h3>{userData.blog}</h3>
        ) : (
          <h3 className="notfound-alert">Not Found</h3>
        )}
      </div>

      <div className="user-dates">
        <div>
          <FontAwesomeIcon icon={faClock} className=" dates-font-awesome" />
          <p>Created at:</p>

          <Moment format="DD/MM/YYYY">{userData.created_at}</Moment>
        </div>
        <div>
          <FontAwesomeIcon icon={faClock} className=" dates-font-awesome" />
          <p>Updated at:</p>
          <Moment format="DD/MM/YYYY">
            <span>{userData.update_at}</span>
          </Moment>
        </div>
      </div>
    </div>
  );
};

export default UseRight;

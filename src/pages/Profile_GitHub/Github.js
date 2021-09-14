import React, { useContext } from "react";
import "./Git.css";
import Navbar_Git from "./Page_Git/Navbar_Git";
import Navigator from "./Page_Git/Navigator";
import { Circular } from "styled-loaders-react";
import User_git from "./Page_Git/User";
import UserRight from "./Page_Git/UseRight";
import {
  ProfileContext,
  ProfileGibProvider,
} from "../../UseContext/Profile_Git/ProfileGit";
const Github = () => {
  const { userData, loading } = useContext(ProfileContext);
  return (
    <div className="github_body">
      <div className="container11">
        <div className="navbar11">
          <Navbar_Git />
          <Navigator />
        </div>
        {loading ? (
          <div>
            <Circular />
          </div>
        ) : (
          <div className="user-info">
            <User_git userData={userData} />
            <UserRight userData={userData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Github;

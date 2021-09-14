import axios from "axios";
import React, { useEffect, useState } from "react";
import User_git from "./User";
import { Circular } from "styled-loaders-react";
import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFoud";
import UserRight from "../Page_Git/UseRight";
import "../Git.css";
const SearchGit = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        setLoading(true);
        setUserData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
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
  );
};

export default SearchGit;

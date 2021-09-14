import axios from "axios";
import React, { useState, createContext, useEffect } from "react";
export const ProfileContext = createContext();

export const ProfileGibProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.github.com/users/fdhhhdjd")
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
  const ProfileData = { userData, loading };
  return (
    <ProfileContext.Provider value={ProfileData}>
      {children}
    </ProfileContext.Provider>
  );
};

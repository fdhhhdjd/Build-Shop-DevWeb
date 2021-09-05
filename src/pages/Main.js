import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Error from "./Error/Error";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import { auth } from "../utils/firebase";
import { setUser } from "../Redux/Actions";
const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);
  const [Toggle, setToggle] = useState(true);
  const formMode = () => {
    setToggle(!Toggle);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/register">
            <Register toggle={() => formMode()} />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="*" component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Main;

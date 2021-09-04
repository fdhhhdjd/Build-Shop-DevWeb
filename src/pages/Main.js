import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Error from "./Error/Error";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
const Main = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/register">
            <Register />
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

import React, { useState } from "react";
import "./Login.css";
import logo from "../../Images/logo1.png";
import forme from "../../Images/forme.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="login">
        <Link to="/">
          <img src={logo} alt="logo" className="login-logo" />
        </Link>
        <div className="login-container">
          <h1>Sign-In</h1>
          <form>
            <h5>E-Mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" onClick={signIn} className="login-signIn">
              Sign In
            </button>
          </form>
          <p>
            By continuing, you agree to WebDeb's &nbsp;
            <Link to="/conditions" className="conditions">
              <strong>Conditions of Use </strong>
            </Link>
            &nbsp; and Privacy Notice.
          </p>
          <p> Forgot your password ?</p>
        </div>
        <p className="new-to-web">New to Web Deb ?</p>
        <Link to="/register">
          <button className="login-register">Create your WebDeb account</button>
        </Link>
        <p className="login-footer">
          <Link to="/conditions">
            <strong className="login-footers">Conditions of Use</strong>
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/privacy">
            <strong className="login-footers">Privacy Notice</strong>
          </Link>
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
          <Link to="/help">
            <strong className="login-footers">Help</strong>
          </Link>
        </p>
        <p className="name-login">
          © 2021-2022, ShopWebDev.com, Wellcome for you
        </p>
        <a
          href="https://www.facebook.com/profile.php?id=100006139249437"
          target="_blank"
        >
          <img src={forme} alt="" className="login-logo1" />
        </a>
      </div>
    </>
  );
};

export default Login;

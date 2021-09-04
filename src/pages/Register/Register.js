import React, { useEffect, useState } from "react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import logo from "../../Images/logo1.png";
import { useDispatch, useSelector } from "react-redux";
import { RegisterInitiate } from "../../Redux/Actions";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useSelector((state) => state.data);
  const history = useHistory();
  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user, history]);
  let dispatch = useDispatch();
  const SubmitRegister = (e) => {
    e.preventDefault();
    dispatch(RegisterInitiate(email, password));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="register">
        <Link to="/">
          <img src={logo} alt="logo" className="register-logo" />
        </Link>
        <div className="register-container">
          <h1>Create Account</h1>
          <form action="">
            <h5>E-Mail</h5>
            <input
              type="text"
              value={email}
              placeholder="nguyentientai@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              placeholder="ReactJs"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="continue" onClick={SubmitRegister}>
              Continue
            </button>
            <div className="detail">
              <p>Already have a account ?</p>
              <Link to="/login" className="signIn-link ">
                <p className="signIn-link ">Sign in</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

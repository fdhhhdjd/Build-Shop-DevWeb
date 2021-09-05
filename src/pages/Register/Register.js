import React, { useEffect, useState } from "react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import logo from "../../Images/logo1.png";
import { useDispatch, useSelector } from "react-redux";
import { RegisterInitiate } from "../../Redux/Actions";

import { auth } from "../../utils/firebase";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
    setConfirmPassword("");
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassowerd = (event) => {
    setConfirmPassword(event.target.value);
  };
  const showPasswords = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== password) {
        return false;
      }
      return true;
    });
    return () => {
      ValidatorForm.removeValidationRule("isPasswordMatch");
    };
  }, [password]);
  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch1", (value) => {
      let reg = new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
      ).test(value);
      if (!reg) {
        return false;
      }
      return true;
    });
    return () => {
      ValidatorForm.removeValidationRule("isPasswordMatch");
    };
  }, [password]);

  return (
    <>
      <div className="register">
        <Link to="/">
          <img src={logo} alt="logo" className="register-logo" />
        </Link>
        <div className="register-container">
          <h1>Create Account</h1>

          <ValidatorForm onSubmit={SubmitRegister}>
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              label="Email"
              onChange={handleEmail}
              name="email"
              value={email}
              validators={["required", "isEmail"]}
              errorMessages={["Bạn cần điện Email vào", "Email không hợp lệ "]}
              autoComplete="off"
            />
            <InputAdornment className="InputAdornment">
              <IconButton onClick={showPasswords} className="InputAdornment1">
                {showPassword ? (
                  <Visibility className="InputAdornment" />
                ) : (
                  <VisibilityOff className="InputAdornment" />
                )}
              </IconButton>
            </InputAdornment>
            <br />
            <TextValidator
              variant="outlined"
              fullWidth
              label="Password"
              onChange={handlePassword}
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              validators={["isPasswordMatch1", "required"]}
              errorMessages={[
                "Bao gồm 8 ký tự một chữ cái viết hoa, một chữ cái viết thường và một số và một ký tự đặc biệt.",
                "Bạn cần điền mật khẩu vào",
              ]}
              autoComplete="off"
            />
            <br />
            <TextValidator
              variant="outlined"
              label="Confirm password"
              fullWidth
              onChange={handleConfirmPassowerd}
              name="confirmPassword"
              type="password"
              validators={["isPasswordMatch", "required"]}
              errorMessages={[
                "Mật khẩu không khớp",
                "Bạn cần điền nhập lại mật khẩu",
              ]}
              value={confirmPassword}
              autoComplete="off"
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
          </ValidatorForm>
        </div>
      </div>
    </>
  );
};

export default Register;

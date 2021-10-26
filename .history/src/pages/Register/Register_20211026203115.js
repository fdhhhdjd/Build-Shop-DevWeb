import React, { useEffect, useState } from "react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import logo from "../../Images/logo1.png";
import { useDispatch, useSelector } from "react-redux";
import { RegisterInitiate } from "../../Redux/Actions";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "react-toastify/dist/ReactToastify.css";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Button, makeStyles } from "@material-ui/core";
import forme from "../../Images/forme.jpg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = (props) => {
  const classes = useStyles();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
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
  const showConfirms = () => {
    setShowConfirm(!showConfirm);
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
        <ToastContainer />
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
              label="Name"
              onChange={handleEmail}
              name="displayName"
              value={displayName}
              validators={["required"]}
              errorMessages={["Bạn cần điền tên vào"]}
              autoComplete="off"
            />

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
                "Bao gồm 8 ký tự ,chữ cái viết hoa, chữ cái viết thường và một số và một ký tự đặc biệt.",
                "Bạn cần điền mật khẩu vào",
              ]}
              autoComplete="off"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={showPasswords}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <br />
            <TextValidator
              variant="outlined"
              label="Confirm password"
              fullWidth
              onChange={handleConfirmPassowerd}
              name="confirmPassword"
              type={showConfirm ? "text" : "password"}
              validators={["isPasswordMatch", "required"]}
              errorMessages={[
                "Mật khẩu không khớp",
                "Bạn cần điền nhập lại mật khẩu",
              ]}
              value={confirmPassword}
              autoComplete="off"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={showConfirms}>
                      {showConfirm ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              id="SubmitRegister"
            >
              Sign Up
            </Button>
            <div className="detail">
              <p>Already have a account ?</p>
              <Link to="/login" className="signIn-link ">
                <p className="signIn-link ">Sign in</p>
              </Link>
            </div>
          </ValidatorForm>
          <p>
            By continuing, you agree to WebDeb's &nbsp;
            <Link to="/conditions" className="conditions">
              <strong>Conditions of Use </strong>
            </Link>
            &nbsp; and Privacy Notice.
          </p>
        </div>
        <p className="login-footer">
          <Link to="/profile">
            <strong className="login-footers">Profile GitHub</strong>
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/team-word">
            <strong className="login-footers">TeamWord</strong>
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
const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "#fff",
  },

  pointer: {
    cursor: "pointer",
    color: "red",
  },
}));
export default Register;

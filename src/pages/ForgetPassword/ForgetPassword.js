import React, { useEffect, useState } from "react";
import { auth } from "../../utils/firebase";
import { ToastContainer, toast, style } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "react-toastify/dist/ReactToastify.css";
import { Button, makeStyles } from "@material-ui/core";
import forme from "../../Images/forme.jpg";
import "./ForgetPassword.css";
import logo from "../../Images/logo1.png";
import { ScaleLoader } from "react-spinners";

const ForgetPassword = () => {
  const override = `
  display: block;
  margin-left: 150px;
  border-color: red;
`;
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const config = {
      url: "http://localhost:3000/login",
      handleCodeInApp: true,
    };

    await auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        setLoading(false);
        toast.success("Vào Email để nhận link và đổi mật khẩu nhé 😆 ");
        window.localStorage.setItem("EmailForRegister", email);
        setEmail("");
      })
      .catch((error) => {
        setLoading(false);

        toast.error(error.message, {
          className: "black-background",
          bodyClassName: "grow-font-size",
          progressClassName: "fancy-progress-bar",
          closeOnClick: true,
          toastId: "my_toast",
          autoClose: true,
          closeButton: true,
          background: "red",
        }); // Default
        console.log("😥");
      });
  };
  return (
    <>
      <div className="forget">
        <Link to="/">
          <img src={logo} alt="logo" className="forget-logo" />
        </Link>
        <div className="forget-container">
          <h1>Password assistance 👨‍💻</h1>
          <ToastContainer className="foo" />
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              value={email}
              validators={["required", "isEmail"]}
              errorMessages={["Bạn cần điện Email vào", "Email không hợp lệ "]}
              autoComplete="off"
            />
            {loading ? (
              <ScaleLoader
                css={override}
                size={150}
                color={"#eb4034"}
                loading={loading}
              />
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                id="Submitforget"
              >
                Submit Email
              </Button>
            )}

            <div className="detail1">
              <p>Don't worry, I'll help you 😍</p>
              <Link to="/login" className="signIn-link1 ">
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

export default ForgetPassword;

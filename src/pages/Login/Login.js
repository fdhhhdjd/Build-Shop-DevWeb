import React, { useEffect, useState, useRef } from "react";
import "./Login.css";
import logo from "../../Images/logo1.png";
import forme from "../../Images/forme.jpg";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast, style } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { loginInitiate } from "../../Redux/Actions";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  FormControlLabel,
  Button,
  Checkbox,
  makeStyles,
  Card,
  CardContent,
} from "@material-ui/core";
import { ScaleLoader } from "react-spinners";
import { auth, googleAuthProvider } from "../../utils/firebase";
import Loading from "../../components/Loading/Loading";
const Login = () => {
  const override = `
  display: block;
  margin-left: 150px;
  border-color: red;
`;
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loadings, setLoading] = useState(false);
  const [rememberme, setRememberMe] = useState(false);

  //! ReCaptCha
  const captcha = useRef(null);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  const reCaptcha = useRef();
  const signIns = async (e) => {
    if (!token) {
      setError("Mời bạn xác thực đầy đủ 😍");
      return;
    }
    setError("");
    dispatch(loginInitiate(email, password));
    setEmail("");
    setPassword("");
    // if (!email || !password) {
    //   toast.error("");
    // }
    // if (password.length < 6) {
    //   toast.error("");
    // }
    // try {
    //   const result = await auth.signInWithEmailLink(
    //     email,
    //     window.location.href
    //   );
    //   if (result.user.sendEmailVerification) {
    //     //! remove user email  fom token local store
    //     window.localStorage.removeItem("EmailForRegister");
    //     //!get user token local store
    //     let user = auth.currentUser;
    //     await user.updatePassword();
    //     const idToken = await user.getIdTokenResult();
    //     console.log("user", user, "idToken", idToken);
    //     history.push("/");
    //   }
    // } catch (error) {
    //   toast.error(error.message);
    // }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleCheck = (event) => {
    setRememberMe(event.target.checked);
  };
  const showPasswords = () => {
    setShowPassword(!showPassword);
  };
  //!Login google
  const loginGoogle = () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async () => {
        dispatch(loginInitiate(user));
        setLoading(true);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const history = useHistory();
  const { user } = useSelector((state) => state.data);
  const { loading } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      setLoading(true);
      history.push("/");
    }
  }, [user, history]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  //!localStorage Forget Auto login
  useEffect(() => {
    setEmail(window.localStorage.getItem("EmailForRegister"));
  }, []);
  return (
    <>
      <div className="login">
        <Link to="/">
          <img src={logo} alt="logo" className="login-logo" />
        </Link>
        <ToastContainer />
        <div className="login-container">
          <h1>Sign-In</h1>

          <ValidatorForm
            onSubmit={signIns}
            onError={(errors) => {
              for (const err of errors) {
                console.log(err.props.errorMessages[0]);
              }
            }}
            className={classes.form}
          >
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              label="Email"
              onChange={handleEmail}
              name="email"
              value={email}
              validators={["required", "isEmail"]}
              errorMessages={[
                "Bạn cần điền Email vào",
                "email Không phải như này",
              ]}
              autoComplete="off"
            />
            <TextValidator
              variant="outlined"
              fullWidth
              label="Password"
              onChange={handlePassword}
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              validators={["required"]}
              errorMessages={["Bạn cần điền mật khẩu vào"]}
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
            <FormControlLabel
              control={
                <Checkbox
                  value={rememberme}
                  onChange={(e) => handleCheck(e)}
                  color="primary"
                />
              }
              label="Remember me"
            />

            <>
              {loading ? (
                <ScaleLoader
                  css={override}
                  size={150}
                  color={"#eb4034"}
                  loading={loading}
                />
              ) : (
                <>
                  <br />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className="login-signIn "
                  >
                    Sign In
                  </Button>
                </>
              )}
            </>
          </ValidatorForm>
          <br />
          <ReCAPTCHA
            ref={reCaptcha}
            sitekey="6LfndHwcAAAAADQNHwvmaGk-DLfeeTERl8-uZume"
            onChange={(token) => setToken(token)}
            onExpired={(e) => setToken("")}
          />
          {error && <p className="text-danger">{error}</p>}
          <br />
          {loadings ? (
            <Loading />
          ) : (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="login-signIn1"
              onClick={loginGoogle}
            >
              <img
                className="firebaseui-idp-icon"
                alt=""
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              />
              Login Google
            </Button>
          )}

          <p>
            By continuing, you agree to WebDeb's &nbsp;
            <Link to="/conditions" className="conditions">
              <strong>Conditions of Use </strong>
            </Link>
            &nbsp; and Privacy Notice.
          </p>
          <Link to="/forgot-password" className="Forgot_pw">
            <p className="Forgot_pw"> Forgot your password ?</p>
          </Link>
        </div>
        <p className="new-to-web">New to Web Deb ?</p>
        <Link to="/register">
          <button className="login-register">Create your WebDeb account</button>
        </Link>
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
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    margin: theme.spacing(3, 0, 2),
    color: "#fff",
  },
  pointer: {
    cursor: "pointer",
    color: "red",
  },
}));
export default Login;

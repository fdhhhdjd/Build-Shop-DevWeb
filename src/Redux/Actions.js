import * as types from "./Actiontypes";
import { auth } from "../utils/firebase";
//!register
const registerStart = () => ({
  type: types.REGISTER_START,
});
const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});
const registerError = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});
//!login
const loginStart = () => ({
  type: types.LOGIN_START,
});
const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginError = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});
//!logout
const logoutStart = () => ({
  type: types.LOGOUT_START,
});
const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});
const logoutError = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

//!handle (sử lý)
export const RegisterInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(registerSuccess(user));
      })
      .catch((error) => dispatch(registerError(error.message)));
  };
};
export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
      })
      .catch((error) => dispatch(loginError(error.message)));
  };
};
export const LogoutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutStart());
    auth
      .signOut()
      .then((resp) => {
        dispatch(logoutSuccess(resp));
      })
      .catch((error) => dispatch(logoutError(error.message)));
  };
};
//tODO:Chỉ ở trang hiện tại khi chưa logout
export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

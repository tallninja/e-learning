import axios from "axios";

import history from "../../history";

import { CHECK_USER_AUTHENTICATION, LOGIN_USER, FETCH_USER } from "../types";

// check user authentication
export const checkUserAuthentication = () => async (dispatch) => {
  const res = await axios.get("/auth/status");
  dispatch({
    type: CHECK_USER_AUTHENTICATION,
    payload: res.data,
  });
};

// login user
export const loginUser = (credentials) => async (dispatch) => {
  const res = await axios.post("/auth/login", credentials);
  dispatch({
    type: LOGIN_USER,
    payload: res.data,
  });
  if (res.data.login) {
    history.push("/");
  }
};

// fetch user data
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/auth/current_user");
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

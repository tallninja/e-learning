import { FETCH_USER, LOGIN_USER } from "../actions/types";

const authReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case LOGIN_USER:
      return action.payload || false;
    default:
      return state;
  }
};

export default authReducer;

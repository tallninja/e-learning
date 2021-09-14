import { CHECK_USER_AUTHENTICATION } from "../actions/types";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case CHECK_USER_AUTHENTICATION:
      return action.payload || false;
    default:
      return state;
  }
};

export default authReducer;

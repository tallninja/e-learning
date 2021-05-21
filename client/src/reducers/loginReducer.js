import { LOGIN_USER } from "../actions/types";

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload || false;
    default:
      return state;
  }
};

export default loginReducer;

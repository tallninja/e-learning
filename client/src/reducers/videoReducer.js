import {
  FETCH_VIDEO,
  CREATE_VIDEO,
  EDIT_VIDEO,
  DELETE_VIDEO,
} from "../actions/types";

const videoReducer = (state = { item: null, message: null }, action) => {
  switch (action.type) {
    case FETCH_VIDEO:
      return { ...state, item: action.payload || false };
    case CREATE_VIDEO:
      return { ...state, message: action.payload || false };
    case EDIT_VIDEO:
      return { ...state, message: action.payload || false };
    case DELETE_VIDEO:
      return { ...state, message: action.payload || false };
    default:
      return state;
  }
};

export default videoReducer;

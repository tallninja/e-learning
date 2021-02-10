import {
  FETCH_MARKING_SCHEME,
  CREATE_MARKING_SCHEME,
  EDIT_MARKING_SCHEME,
  DELETE_MARKING_SCHEME,
} from "../actions/types";

const markingSchemeReducer = (
  state = { item: null, message: null },
  action
) => {
  switch (action.type) {
    case FETCH_MARKING_SCHEME:
      return { ...state, item: action.payload || false };
    case CREATE_MARKING_SCHEME:
      return { ...state, message: action.payload || false };
    case EDIT_MARKING_SCHEME:
      return { ...state, message: action.payload || false };
    case DELETE_MARKING_SCHEME:
      return { ...state, message: action.payload || false };
    default:
      return state;
  }
};

export default markingSchemeReducer;

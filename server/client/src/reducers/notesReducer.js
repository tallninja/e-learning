import {
  FETCH_NOTES,
  CREATE_NOTES,
  EDIT_NOTES,
  DELETE_NOTES,
} from "../actions/types";

const notesReducer = (state = { item: null, message: null }, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return { ...state, item: action.payload || false };
    case CREATE_NOTES:
      return { ...state, message: action.payload || false };
    case EDIT_NOTES:
      return { ...state, message: action.payload || false };
    case DELETE_NOTES:
      return { ...state, message: action.payload || false };
    default:
      return state;
  }
};

export default notesReducer;

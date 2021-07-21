import {
  CREATE_SUBJECT,
  FETCH_SUBJECT,
  FETCH_SUBJECTS,
  EDIT_SUBJECT,
  DELETE_SUBJECT,
} from "../actions/types";

const subjectsReducer = (
  state = { subjectsList: null, subject: null, message: null },
  action
) => {
  switch (action.type) {
    case CREATE_SUBJECT:
      return { ...state, message: action.payload || false };
    case FETCH_SUBJECTS:
      return { ...state, subjectsList: action.payload || false };
    case FETCH_SUBJECT:
      return { ...state, subject: action.payload || false };
    case EDIT_SUBJECT:
      return { ...state, message: action.payload || false };
    case DELETE_SUBJECT:
      return { ...state, message: action.payload || false };
    default:
      return state;
  }
};

export default subjectsReducer;

import {
  FETCH_REVISION_QUESTIONS,
  CREATE_REVISION_QUESTIONS,
  EDIT_REVISION_QUESTIONS,
  DELETE_REVISION_QUESTIONS,
} from "../actions/types";

const revisionQuestionsReducer = (
  state = { item: null, message: null },
  action
) => {
  switch (action.type) {
    case FETCH_REVISION_QUESTIONS:
      return { ...state, item: action.payload || false };
    case CREATE_REVISION_QUESTIONS:
      return { ...state, message: action.payload };
    case EDIT_REVISION_QUESTIONS:
      return { ...state, message: action.payload };
    case DELETE_REVISION_QUESTIONS:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default revisionQuestionsReducer;

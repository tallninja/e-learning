import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./authReducer";
import loginReducer from "./loginReducer";
import userReducer from "./userReducer";
import materialsReducer from "./materialsReducer";
import videosReducer from "./videosReducer";
import notesReducer from "./notesReducer";
import revisionQuestionsReducer from "./revisionQuestionsReducer";
import markingSchemeReducer from "./markingSchemeReducer";

export default combineReducers({
  auth: authReducer,
  login: loginReducer,
  user: userReducer,
  materials: materialsReducer,
  videos: videosReducer,
  notes: notesReducer,
  revisionQuestions: revisionQuestionsReducer,
  markingScheme: markingSchemeReducer,
  form: formReducer,
});

import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./authReducer";
import loginReducer from "./loginReducer";
import userReducer from "./userReducer";
import materialsReducer from "./materialsReducer";
import notesReducer from "./notesReducer";
import revisionQuestionsReducer from "./revisionQuestionsReducer";
import markingSchemeReducer from "./markingSchemeReducer";
import videoReducer from "./videoReducer";

export default combineReducers({
  auth: authReducer,
  login: loginReducer,
  user: userReducer,
  materials: materialsReducer,
  notes: notesReducer,
  revisionQuestions: revisionQuestionsReducer,
  markingScheme: markingSchemeReducer,
  video: videoReducer,
  form: formReducer,
});

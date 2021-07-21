import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./authReducer";
import loginReducer from "./loginReducer";
import userReducer from "./userReducer";
import subjectsReducer from "./subjectsReducer";
import materialsReducer from "./materialsReducer";
import notesReducer from "./notesReducer";
import revisionQuestionsReducer from "./revisionQuestionsReducer";
import markingSchemeReducer from "./markingSchemeReducer";
import videoReducer from "./videoReducer";
import fileUploadReducer from "./fileUploadReducer";

export default combineReducers({
  auth: authReducer,
  login: loginReducer,
  user: userReducer,
  subjects: subjectsReducer,
  materials: materialsReducer,
  notes: notesReducer,
  revisionQuestions: revisionQuestionsReducer,
  markingScheme: markingSchemeReducer,
  video: videoReducer,
  fileURL: fileUploadReducer,
  form: formReducer,
});

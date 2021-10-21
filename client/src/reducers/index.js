import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./authReducer";
import loginReducer from "./loginReducer";
import userReducer from "./userReducer";
import subjectsReducer from "./subjectsReducer";
import topicsReducer from "./topicsReducer";
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
  topics: topicsReducer,
  notes: notesReducer,
  revisionQuestions: revisionQuestionsReducer,
  markingScheme: markingSchemeReducer,
  video: videoReducer,
  fileURL: fileUploadReducer,
  form: formReducer,
});

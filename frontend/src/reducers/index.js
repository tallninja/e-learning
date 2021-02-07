import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./authReducer";
import materialsReducer from "./materialsReducer";
import videosReducer from "./videosReducer";

export default combineReducers({
  auth: authReducer,
  materials: materialsReducer,
  form: formReducer,
  videos: videosReducer,
});

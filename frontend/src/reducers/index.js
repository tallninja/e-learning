import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./authReducer";
import materialsReducer from "./materialsReducer";

export default combineReducers({
  auth: authReducer,
  materials: materialsReducer,
  form: formReducer,
});

import { UPLOAD_FILE } from "../actions/types";

const fileUploadReducer = (state = null, action) => {
  switch (action.type) {
    case UPLOAD_FILE:
      return action.payload || false;
    default:
      return state;
  }
};

export default fileUploadReducer;

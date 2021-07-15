import { UPLOAD_FILE } from "../actions/types";

const fileUploadReducer = (state = {}, action) => {
  switch (action.type) {
    case UPLOAD_FILE:
      return action.payload || false;
    default:
      return state;
  }
};

export default fileUploadReducer;

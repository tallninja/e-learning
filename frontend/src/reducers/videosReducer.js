import { FETCH_VIDEOS } from "../actions/types";

const videosReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_VIDEOS:
      return action.payload || false;
    default:
      return state;
  }
};

export default videosReducer;

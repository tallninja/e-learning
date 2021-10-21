import {
  CREATE_TOPIC,
  FETCH_TOPICS,
  FETCH_TOPIC,
  EDIT_TOPIC,
  DELETE_TOPIC,
  FETCH_ALL_TOPICS,
} from "../actions/types";

const topicsReducer = (
  state = { topicsList: null, topic: null, message: null },
  action
) => {
  switch (action.type) {
    case FETCH_ALL_TOPICS:
      return { ...state, topicsList: action.payload || false };
    case CREATE_TOPIC:
      return { ...state, message: action.payload };
    case FETCH_TOPICS:
      return { ...state, topicsList: action.payload || false };
    case FETCH_TOPIC:
      return { ...state, topic: action.payload || false };
    case EDIT_TOPIC:
      return { ...state, message: action.payload };
    case DELETE_TOPIC:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default topicsReducer;

import axios from "axios";
import history from "../../history";

import {
  FETCH_ALL_TOPICS,
  CREATE_TOPIC,
  DELETE_TOPIC,
  EDIT_TOPIC,
  FETCH_TOPIC,
  FETCH_TOPICS,
} from "../types";

// fetch all topics
export const fetchAllTopics = (subject, page) => async (dispatch) => {
  const res = await axios.get("/api/topics/all", {
    params: {
      page: page,
      subject: subject,
    },
  });
  dispatch({
    type: FETCH_ALL_TOPICS,
    payload: res.data,
  });
};

// create a topic
export const createTopic = (topic) => async (dispatch) => {
  const res = await axios.post("/api/topics", topic);
  history.push(`/subjects/${topic.subject}`);
  dispatch({
    type: CREATE_TOPIC,
    payload: res.data,
  });
};

// fetch all the user's topics
export const fetchTopics = () => async (dispatch) => {
  const res = await axios.get("/api/topics");
  dispatch({
    type: FETCH_TOPICS,
    payload: res.data || "",
  });
};

// fetch a single topic
export const fetchTopic = (id) => async (dispatch) => {
  const res = await axios.get("/api/topics/item", {
    params: {
      id: id,
    },
  });
  dispatch({
    type: FETCH_TOPIC,
    payload: res.data || "",
  });
};

// edit a topic
export const editTopic = (id, data) => async (dispatch) => {
  const res = await axios.patch("/api/topics", data, {
    params: {
      id: id,
    },
  });
  history.push(`/subjects/${data.subject}`);
  dispatch({
    type: EDIT_TOPIC,
    payload: res.data,
  });
};

// delete a topic
export const deleteTopic = (id) => async (dispatch) => {
  const res = await axios.delete("/api/topics", {
    params: {
      id: id,
    },
  });
  dispatch({
    type: DELETE_TOPIC,
    payload: res.data,
  });
};

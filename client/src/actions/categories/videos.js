import axios from "axios";
import history from "../../history";

import { FETCH_VIDEO, CREATE_VIDEO, EDIT_VIDEO, DELETE_VIDEO } from "../types";

// fetch video
export const fetchVideo = (topicID) => async (dispatch) => {
  const res = await axios.get("/api/video", {
    params: {
      topicID: topicID,
    },
  });
  dispatch({
    type: FETCH_VIDEO,
    payload: res.data || "",
  });
};

// create video
export const createVideo = (video) => async (dispatch) => {
  const res = await axios.post("/api/video", video);
  history.push(`/subjects/${video.subject}/topics/${video.topic}/videos`);
  dispatch({
    type: CREATE_VIDEO,
    payload: res.data,
  });
};

// edit video
export const editVideo =
  ({ contentID, data, subjectID, topicID }) =>
  async (dispatch) => {
    const res = await axios.patch("/api/video", data, {
      params: {
        id: contentID,
      },
    });
    history.push(`/subjects/${subjectID}/topics/${topicID}/videos`);
    dispatch({
      type: EDIT_VIDEO,
      payload: res.data,
    });
  };

// delete video
export const deleteVideo =
  ({ subjectID, topicID, contentID }) =>
  async (dispatch) => {
    const res = axios.delete("/api/video", {
      params: {
        id: contentID,
      },
    });
    history.push(`/subjects/${subjectID}/topics/${topicID}/videos`);
    dispatch({
      type: DELETE_VIDEO,
      payload: res.data,
    });
  };

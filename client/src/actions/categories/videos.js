import axios from "axios";
import history from "../../history";

import { FETCH_VIDEO, CREATE_VIDEO, EDIT_VIDEO, DELETE_VIDEO } from "../types";

// fetch video
export const fetchVideo = (materialID) => async (dispatch) => {
  const res = await axios.get("/api/video", {
    params: {
      materialID: materialID,
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
  history.push(`/materials/content/${video.materialID}/videos`);
  dispatch({
    type: CREATE_VIDEO,
    payload: res.data,
  });
};

// edit video
export const editVideo = (id, data) => async (dispatch) => {
  const res = await axios.patch("/api/video", data, {
    params: {
      id: id,
    },
  });
  history.push(`/materials/content/${data.materialID}/videos`);
  dispatch({
    type: EDIT_VIDEO,
    payload: res.data,
  });
};

// delete video
export const deleteVideo = (id, materialID) => async (dispatch) => {
  const res = axios.delete("/api/video", {
    params: {
      id: id,
    },
  });
  history.push(`/materials/content/${materialID}/videos`);
  dispatch({
    type: DELETE_VIDEO,
    payload: res.data,
  });
};

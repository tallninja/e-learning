import axios from "axios";
import {
  CHECK_USER_AUTHENTICATION,
  FETCH_USER,
  LOGIN_USER,
  FETCH_MATERIALS,
  FETCH_MATERIAL,
  DELETE_MATERIAL,
  EDIT_MATERIAL,
  CREATE_MATERIAL,
  FETCH_ALL_MATERIALS,
  FETCH_VIDEOS,
  FETCH_NOTES,
  CREATE_NOTES,
  EDIT_NOTES,
  DELETE_NOTES,
  FETCH_REVISION_QUESTIONS,
  CREATE_REVISION_QUESTIONS,
  EDIT_REVISION_QUESTIONS,
  DELETE_REVISION_QUESTIONS,
  FETCH_MARKING_SCHEME,
  CREATE_MARKING_SCHEME,
  EDIT_MARKING_SCHEME,
  DELETE_MARKING_SCHEME,
} from "./types";

import youtube from "../utils/youtube";

import history from "../history";

// check user authentication
export const checkUserAuthentication = () => async (dispatch) => {
  const res = await axios.get("/auth/status");
  dispatch({
    type: CHECK_USER_AUTHENTICATION,
    payload: res.data,
  });
};

// login user
export const loginUser = (credentials) => async (dispatch) => {
  const res = await axios.post("/auth/login", credentials);
  dispatch({
    type: LOGIN_USER,
    payload: res.data,
  });
  if (res.data.login) {
    history.push("/");
  }
};

// fetch user data
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/auth/current_user");
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

// fetch all materials
export const fetchAllMaterials = (subject, page) => async (dispatch) => {
  const res = await axios.get("/api/materials/all", {
    params: {
      page: page,
      subject: subject,
    },
  });
  dispatch({
    type: FETCH_ALL_MATERIALS,
    payload: res.data,
  });
};

// create a material
export const createMaterial = (material) => async (dispatch) => {
  const res = await axios.post("/api/materials", material);
  history.push(`/materials/${material.subject}/all`);
  dispatch({
    type: CREATE_MATERIAL,
    payload: res.data,
  });
};

// fetch all the user's materials
export const fetchMaterials = () => async (dispatch) => {
  const res = await axios.get("/api/materials");
  dispatch({
    type: FETCH_MATERIALS,
    payload: res.data || "",
  });
};

// fetch a single material
export const fetchMaterial = (id) => async (dispatch) => {
  const res = await axios.get("/api/materials/item", {
    params: {
      id: id,
    },
  });
  dispatch({
    type: FETCH_MATERIAL,
    payload: res.data || "",
  });
};

// edit a material
export const editMaterial = (id, data) => async (dispatch) => {
  const res = await axios.patch("/api/materials", data, {
    params: {
      id: id,
    },
  });
  history.push(`/materials/${data.subject}/all`);
  dispatch({
    type: EDIT_MATERIAL,
    payload: res.data,
  });
};

// delete a material
export const deleteMaterial = (id) => async (dispatch) => {
  const res = await axios.delete("/api/materials", {
    params: {
      id: id,
    },
  });
  dispatch({
    type: DELETE_MATERIAL,
    payload: res.data,
  });
};

// fetch videos
export const fetchVideos = (VIDEO_ID) => async (dispatch) => {
  const res = await youtube.get("/videos", {
    params: { id: VIDEO_ID },
  });
  dispatch({
    type: FETCH_VIDEOS,
    payload: res.data.items,
  });
};

// fetch a notes
export const fetchNotes = (materialID) => async (dispatch) => {
  const res = await axios.get("/api/notes", {
    params: {
      materialID: materialID,
    },
  });
  dispatch({
    type: FETCH_NOTES,
    payload: res.data || "",
  });
};

// create a notes
export const createNotes = (notes) => async (dispatch) => {
  const res = await axios.post("/api/notes", notes);
  history.push(`/materials/content/${notes.materialID}/notes`);
  dispatch({
    type: CREATE_NOTES,
    payload: res.data,
  });
};

// edit a notes
export const editNotes = (id, data) => async (dispatch) => {
  const res = await axios.patch("/api/notes", data, {
    params: {
      id: id,
    },
  });
  history.push(`/materials/content/${data.materialID}/notes`);
  dispatch({
    type: EDIT_NOTES,
    payload: res.data,
  });
};

// delete a notes
export const deleteNotes = (id, materialID) => async (dispatch) => {
  const res = await axios.delete("/api/notes", {
    params: {
      id: id,
    },
  });
  history.push(`/materials/content/${materialID}/notes`);
  dispatch({
    type: DELETE_NOTES,
    payload: res.data,
  });
};

// fetch a revision questions
export const fetchRevisionQuestions = (materialID) => async (dispatch) => {
  const res = await axios.get("/api/revision_questions", {
    params: {
      materialID: materialID,
    },
  });
  dispatch({
    type: FETCH_REVISION_QUESTIONS,
    payload: res.data || "",
  });
};

// create a revision questions
export const createRevisionQuestions =
  (revisionQuestions) => async (dispatch) => {
    const res = await axios.post("/api/revision_questions", revisionQuestions);
    history.push("/");
    dispatch({
      type: CREATE_REVISION_QUESTIONS,
      payload: res.data,
    });
  };

// edit a revision questions
export const editRevisionQuestions = (id, data) => async (dispatch) => {
  const res = await axios.patch("/api/revision_questions", data, {
    params: {
      id: id,
    },
  });
  history.push(`/materials/content/${data.materialID}/revision_questions`);
  dispatch({
    type: EDIT_REVISION_QUESTIONS,
    payload: res.data,
  });
};

// delete a revision questions
export const deleteRevisionQuestions = (id, materialID) => async (dispatch) => {
  const res = await axios.delete("/api/revision_questions", {
    params: {
      id: id,
    },
  });
  history.push(`/materials/content/${materialID}/revision_questions`);
  dispatch({
    type: DELETE_REVISION_QUESTIONS,
    payload: res.data,
  });
};

// fetch a marking scheme
export const fetchMarkingScheme = (materialID) => async (dispatch) => {
  const res = await axios.get("/api/marking_scheme", {
    params: {
      materialID: materialID,
    },
  });
  dispatch({
    type: FETCH_MARKING_SCHEME,
    payload: res.data || "",
  });
};

// create a marking scheme
export const createMarkingScheme = (markingScheme) => async (dispatch) => {
  const res = await axios.post("/api/marking_scheme", markingScheme);
  history.push("/");
  dispatch({
    type: CREATE_MARKING_SCHEME,
    payload: res.data,
  });
};

// edit a marking scheme
export const editMarkingScheme = (id, data) => async (dispatch) => {
  const res = await axios.patch("/api/marking_scheme", data, {
    params: {
      id: id,
    },
  });
  history.push(`/materials/content/${data.materialID}/marking_scheme`);
  dispatch({
    type: EDIT_MARKING_SCHEME,
    payload: res.data,
  });
};

// delete a marking scheme
export const deleteMarkingScheme = (id, materialID) => async (dispatch) => {
  const res = await axios.delete("/api/marking_scheme", {
    params: {
      id: id,
    },
  });
  history.push(`/materials/content/${materialID}/marking_scheme`);
  dispatch({
    type: DELETE_MARKING_SCHEME,
    payload: res.data,
  });
};

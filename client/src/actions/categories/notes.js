import axios from "axios";
import history from "../../history";

import { FETCH_NOTES, CREATE_NOTES, EDIT_NOTES, DELETE_NOTES } from "../types";

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
export const editNotes = (data) => async (dispatch) => {
  const res = await axios.patch("/api/notes", data);
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

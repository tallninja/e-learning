import axios from "axios";
import history from "../../history";

import { FETCH_NOTES, CREATE_NOTES, EDIT_NOTES, DELETE_NOTES } from "../types";

// fetch notes
export const fetchNotes = (topicID) => async (dispatch) => {
  const res = await axios.get("/api/notes", {
    params: {
      topic: topicID,
    },
  });
  dispatch({
    type: FETCH_NOTES,
    payload: res.data || "",
  });
};

// create notes
export const createNotes = (notes) => async (dispatch) => {
  const res = await axios.post("/api/notes", notes);
  history.push(`/subjects/${notes.subject}/topics/${notes.topic}/notes`);
  dispatch({
    type: CREATE_NOTES,
    payload: res.data,
  });
};

// edit notes
export const editNotes =
  ({ data, subjectID, topicID }) =>
  async (dispatch) => {
    const res = await axios.patch("/api/notes", data);
    history.push(`/subjects/${subjectID}/topics/${topicID}/notes`);
    dispatch({
      type: EDIT_NOTES,
      payload: res.data,
    });
  };

// delete notes
export const deleteNotes =
  ({ contentID, subjectID, topicID }) =>
  async (dispatch) => {
    const res = await axios.delete("/api/notes", {
      params: {
        id: contentID,
      },
    });
    history.push(`/subjects/${subjectID}/topics/${topicID}/notes`);
    dispatch({
      type: DELETE_NOTES,
      payload: res.data,
    });
  };

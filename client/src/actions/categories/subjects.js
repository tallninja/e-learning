import axios from "axios";
import history from "../../history";

import {
  CREATE_SUBJECT,
  FETCH_SUBJECT,
  FETCH_SUBJECTS,
  EDIT_SUBJECT,
  DELETE_SUBJECT,
} from "../types";

// fetch all subjects
export const fetchSubjects = (page) => async (dispatch) => {
  const res = await axios.get("/api/subjects/all", {
    params: {
      page: page,
    },
  });

  dispatch({
    type: FETCH_SUBJECTS,
    payload: res.data,
  });
};

// fetch subject
export const fetchSubject = (id) => async (dispatch) => {
  const res = await axios.get("/api/subjects/item", {
    params: {
      id: id,
    },
  });

  dispatch({
    type: FETCH_SUBJECT,
    payload: res.data,
  });
};

// create subject
export const createSubject = (data) => async (dispatch) => {
  const res = await axios.post("/api/subjects", data);

  dispatch({
    type: CREATE_SUBJECT,
    payload: res.data,
  });

  history.push("/");
};

// edit subject
export const editSubject = (data) => async (dispatch) => {
  const res = await axios.patch("/api/subjects", data);

  dispatch({
    type: EDIT_SUBJECT,
    payload: res.data,
  });

  history.push("/");
};

// delete subject
export const deleteSubject = (id) => async (dispatch) => {
  const res = await axios.delete("/api/subjects", {
    params: {
      id: id,
    },
  });

  dispatch({
    type: DELETE_SUBJECT,
    payload: res.data,
  });

  history.push("/");
};

import axios from "axios";
import history from "../../history";

import {
  FETCH_MARKING_SCHEME,
  CREATE_MARKING_SCHEME,
  EDIT_MARKING_SCHEME,
  DELETE_MARKING_SCHEME,
} from "../types";

// fetch marking scheme
export const fetchMarkingScheme = (topicID) => async (dispatch) => {
  const res = await axios.get("/api/marking_scheme", {
    params: {
      topicID: topicID,
    },
  });
  dispatch({
    type: FETCH_MARKING_SCHEME,
    payload: res.data || "",
  });
};

// create marking scheme
export const createMarkingScheme = (markingScheme) => async (dispatch) => {
  const res = await axios.post("/api/marking_scheme", markingScheme);
  history.push(
    `/subjects/${markingScheme.subject}/topics/${markingScheme.topic}/marking_scheme`
  );
  dispatch({
    type: CREATE_MARKING_SCHEME,
    payload: res.data,
  });
};

// edit marking scheme
export const editMarkingScheme =
  ({ data, subjectID, topicID, contentID }) =>
  async (dispatch) => {
    const res = await axios.patch("/api/marking_scheme", data, {
      params: {
        id: contentID,
      },
    });
    history.push(`/subjects/${subjectID}/topics/${topicID}/marking_scheme`);
    dispatch({
      type: EDIT_MARKING_SCHEME,
      payload: res.data,
    });
  };

// delete marking scheme
export const deleteMarkingScheme =
  ({ subjectID, topicID, contentID }) =>
  async (dispatch) => {
    const res = await axios.delete("/api/marking_scheme", {
      params: {
        id: contentID,
      },
    });
    history.push(`/subjects/${subjectID}/topics/${topicID}/marking_scheme`);
    dispatch({
      type: DELETE_MARKING_SCHEME,
      payload: res.data,
    });
  };

import axios from "axios";
import history from "../../history";

import {
  FETCH_REVISION_QUESTIONS,
  CREATE_REVISION_QUESTIONS,
  EDIT_REVISION_QUESTIONS,
  DELETE_REVISION_QUESTIONS,
} from "../types";

// fetch revision questions
export const fetchRevisionQuestions = (topicID) => async (dispatch) => {
  const res = await axios.get("/api/revision_questions", {
    params: {
      topicID: topicID,
    },
  });
  dispatch({
    type: FETCH_REVISION_QUESTIONS,
    payload: res.data || "",
  });
};

// create revision questions
export const createRevisionQuestions =
  (revisionQuestions) => async (dispatch) => {
    const res = await axios.post("/api/revision_questions", revisionQuestions);
    history.push(
      `/subjects/${revisionQuestions.subject}/topics/${revisionQuestions.topic}/revision_questions`
    );
    dispatch({
      type: CREATE_REVISION_QUESTIONS,
      payload: res.data,
    });
  };

// edit revision questions
export const editRevisionQuestions =
  ({ data, subjectID, topicID }) =>
  async (dispatch) => {
    const res = await axios.patch("/api/revision_questions", data);
    history.push(`/subjects/${subjectID}/topics/${topicID}/revision_questions`);
    dispatch({
      type: EDIT_REVISION_QUESTIONS,
      payload: res.data,
    });
  };

// delete revision questions
export const deleteRevisionQuestions =
  ({ subjectID, topicID, contentID }) =>
  async (dispatch) => {
    const res = await axios.delete("/api/revision_questions", {
      params: {
        id: contentID,
      },
    });
    history.push(`/subjects/${subjectID}/topics/${topicID}/revision_questions`);
    dispatch({
      type: DELETE_REVISION_QUESTIONS,
      payload: res.data,
    });
  };

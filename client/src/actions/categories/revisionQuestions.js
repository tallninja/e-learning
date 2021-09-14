import axios from "axios";
import history from "../../history";

import {
  FETCH_REVISION_QUESTIONS,
  CREATE_REVISION_QUESTIONS,
  EDIT_REVISION_QUESTIONS,
  DELETE_REVISION_QUESTIONS,
} from "../types";

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
    history.push(
      `/materials/content/${revisionQuestions.materialID}/revision_questions`
    );
    dispatch({
      type: CREATE_REVISION_QUESTIONS,
      payload: res.data,
    });
  };

// edit a revision questions
export const editRevisionQuestions = (data) => async (dispatch) => {
  const res = await axios.patch("/api/revision_questions", data);
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

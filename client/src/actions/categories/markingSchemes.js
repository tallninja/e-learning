import axios from "axios";
import history from "../../history";

import {
  FETCH_MARKING_SCHEME,
  CREATE_MARKING_SCHEME,
  EDIT_MARKING_SCHEME,
  DELETE_MARKING_SCHEME,
} from "../types";

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
  history.push(`/materials/content/${markingScheme.materialID}/marking_scheme`);
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

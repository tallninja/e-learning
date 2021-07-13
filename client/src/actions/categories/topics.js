import axios from "axios";
import history from "../../history";

import {
  FETCH_ALL_MATERIALS,
  CREATE_MATERIAL,
  DELETE_MATERIAL,
  EDIT_MATERIAL,
  FETCH_MATERIAL,
  FETCH_MATERIALS,
} from "../types";

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

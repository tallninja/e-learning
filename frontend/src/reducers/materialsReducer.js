import {
  CREATE_MATERIAL,
  FETCH_MATERIALS,
  FETCH_MATERIAL,
  EDIT_MATERIAL,
  DELETE_MATERIAL,
  FETCH_ALL_MATERIALS,
} from "../actions/types";

const materialsReducer = (
  state = { materialsList: null, material: null, message: null },
  action
) => {
  switch (action.type) {
    case FETCH_ALL_MATERIALS:
      return { ...state, materialsList: action.payload || false };
    case CREATE_MATERIAL:
      return { ...state, message: action.payload };
    case FETCH_MATERIALS:
      return { ...state, materialsList: action.payload || false };
    case FETCH_MATERIAL:
      return { ...state, material: action.payload || false };
    case EDIT_MATERIAL:
      return { ...state, message: action.payload };
    case DELETE_MATERIAL:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default materialsReducer;

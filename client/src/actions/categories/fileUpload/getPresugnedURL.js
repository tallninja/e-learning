import axios from "axios";

import { GET_PRESIGNED_URL } from "../../types";

export const getPresignedURL =
  ({ fileType, fileSubject, fileTopic, fileCategory, fileName }) =>
  (dispatch) => {
    const res = await axios.get("/api/uploads/get-presigned-url", {
      params: {
        fileType,
        fileSubject,
        fileTopic,
        fileCategory,
        fileName,
      },
    });

    const {
      url,
      fields: { key },
      fileDetails,
    } = res.data;

    dispatch({
      type: GET_PRESIGNED_URL,
      payload: { url, key, fileDetails },
    });
  };

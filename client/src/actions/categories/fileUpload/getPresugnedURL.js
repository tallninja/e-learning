import axios from "axios";

import { GET_PRESIGNED_URL } from "../../types";

export const getPresignedURL = ({
  fileType,
  fileSubject,
  fileTopic,
  fileCategory,
  fileName,
}) => {
  const res = await axios.get("/api/uploads/get-presigned-url", {
    params: {
      fileType,
      fileSubject,
      fileTopic,
      fileCategory,
      fileName,
    },
  });

  return res.data;
};

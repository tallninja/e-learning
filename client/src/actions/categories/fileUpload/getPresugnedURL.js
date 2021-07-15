import axios from "axios";

export const getPresignedURL = async ({
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

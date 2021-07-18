import axios from "axios";

const getPresignedURL = async ({
  host,
  contentType,
  fileType,
  fileSubject,
  fileTopic,
  fileCategory,
  fileName,
}) => {
  const res = await axios.get("/api/uploads/get-presigned-url", {
    params: {
      host,
      contentType,
      fileType,
      fileSubject,
      fileTopic,
      fileCategory,
      fileName,
    },
  });

  return res.data;
};

export default getPresignedURL;

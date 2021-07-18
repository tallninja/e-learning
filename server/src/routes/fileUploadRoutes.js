const axios = require("axios");

const { apiPath, apiUrl } = require("../config/keys").cdkExports;

const getPresignedURL = async ({
  host,
  contentType,
  fileType,
  fileSubject,
  fileTopic,
  fileCategory,
  fileName,
}) => {
  const API_BASE_URL = apiUrl.slice(0, apiUrl.length - 1);
  const res = await axios.get(`${API_BASE_URL}/${apiPath}`, {
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

module.exports = (router, requireLogin, requireAdmin) => {
  router.get(
    "/uploads/get-presigned-url",
    requireLogin,
    requireAdmin,
    async (req, res) => {
      const apiResponse = await getPresignedURL(req.query);
      res.status(200).send(apiResponse);
    }
  );
};

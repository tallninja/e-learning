const { default: axios } = require("axios");

const { apiPath, apiUrl } = require("../config/keys").cdkExports;

const getPresignedURL = async (data) => {
  const API_BASE_URL = apiUrl.slice(0, apiUrl.length - 1);
  try {
    const res = await axios.get(`${API_BASE_URL}/${apiPath}`, {
      params: {
        host: data.host,
        contentType: data.contentType,
        fileType: data.fileType,
        fileSubject: data.fileSubject,
        fileTopic: data.fileTopic,
        fileCategory: data.fileCategory,
        fileName: data.fileName,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error.response.data);
  }
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

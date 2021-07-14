const { apiUrl, apiPath } = require("../cdk-exports-dev.json")[
  "kisomoview-file-upload-dev"
];

const getPresignedURL = async ({
  fileType,
  fileSubject,
  fileTopic,
  fileCategory,
  fileName,
}) => {
  const API_BASE_URL = apiUrl.slice(0, apiUrl.length - 1);
  const res = await axios.get(`${API_BASE_URL}/${apiPath}`, {
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

module.exports = (router, requireLogin, requireAdmin) => {
  router.get("/uploads", requireLogin, requireAdmin, async (req, res) => {
    const apiResponse = await getPresignedURL(req.query);
    res.status(200).send(apiResponse);
  });
};

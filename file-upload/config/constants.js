if (process.env.NODE_ENV === "production") {
  module.exports = {
    constants: {
      REGION: "af-south-1",
      STACK_PREFIX: "kisomoview-file-upload-v2",
      DEPLOY_ENVIRONMENT: "prod",
      ALLOWED_ORIGIN: "https://kisomoview-v2.herokuapp.com",
      API_PATH: "get-presigned-url",
    },
  };
} else {
  module.exports = {
    constants: {
      REGION: "af-south-1",
      STACK_PREFIX: "kisomoview-file-upload-v2",
      DEPLOY_ENVIRONMENT: "dev",
      ALLOWED_ORIGIN: "http://localhost:3000",
      API_PATH: "get-presigned-url",
    },
  };
}

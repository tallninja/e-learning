if (process.env.NODE_ENV === "production") {
  module.exports = {
    constants: {
      REGION: process.env.CDK_DEFAULT_REGION,
      STACK_PREFIX: process.env.AWS_STACK_PREFIX,
      DEPLOY_ENVIRONMENT: "prod",
      ALLOWED_ORIGIN: process.env.AWS_ALLOWED_ORIGIN,
      API_PATH: "get-presigned-url",
    },
  };
} else {
  module.exports = {
    constants: {
      REGION: process.env.CDK_DEFAULT_REGION,
      STACK_PREFIX: "kisomoview-file-upload-v2",
      DEPLOY_ENVIRONMENT: "dev",
      ALLOWED_ORIGIN: "http://localhost:3000",
      API_PATH: "get-presigned-url",
    },
  };
}

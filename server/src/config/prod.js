const { apiPath, apiUrl } = require("../cdk-exports-prod.json")[
  "kisomoview-file-upload-prod"
];

module.exports = {
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
  mongo: {
    URI: process.env.MONGO_URI,
  },
  cookieSession: {
    key: process.env.COOKIE_SESSION_KEY,
  },
  cdkExports: { apiPath, apiUrl },
};

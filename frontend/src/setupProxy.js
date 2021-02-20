const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) =>
  app.use(
    ["/auth", "/api"],
    createProxyMiddleware({
      target: "http://e-learning_backend_1:5000",
    })
  );

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  if (process.env.RUN_ENV === "docker") {
    app.use(
      ["/auth", "/api"],
      createProxyMiddleware({
        target: "http://e-learning_server_1:5000",
      })
    );
  } else {
    app.use(
      ["/auth", "/api"],
      createProxyMiddleware({
        target: "http://localhost:5000",
      })
    );
  }
};

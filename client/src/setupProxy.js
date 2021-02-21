const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  if (process.env.RUN_ENV === "docker") {
    app.use(
      ["/auth", "/api"],
      createProxyMiddleware({
        target: "http://e-learning_server_1:5000",
      })
    );
  } else if (process.env.NODE_ENV === "production") {
    const PORT = process.env.PORT || 5000;
    app.use(
      ["/auth", "/api"],
      createProxyMiddleware({
        target: `https://dry-shore-76914.herokuapp.com:${PORT}`,
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

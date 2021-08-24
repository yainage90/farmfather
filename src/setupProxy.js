const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/service", {
      target: "http://api.nongsaro.go.kr:80",
      changeOrigin: true,
    })
  );
};

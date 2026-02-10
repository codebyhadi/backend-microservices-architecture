const proxy = require("@fastify/http-proxy");
const auth = require("./auth-middleware");

module.exports = async (app) => {
  app.register(proxy, {
    upstream: "http://localhost:4001",
    prefix: "/auth"
  });

  app.register(proxy, {
    upstream: "http://localhost:4002",
    prefix: "/users",
    preHandler: auth
  });

  app.register(proxy, {
    upstream: "http://localhost:4003",
    prefix: "/payments",
    preHandler: auth
  });
};
const Fastify = require("fastify");
const routes = require("./routes");

const app = Fastify({ logger: true });

app.register(routes);

app.listen({ port: 3000 }, () => {
  console.log("API Gateway running on :3000");
});
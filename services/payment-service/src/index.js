const Fastify = require("fastify");
const provider = require("./provider");

const app = Fastify();

app.post("/charge", async (req) => {
  return provider.charge(req.body.amount);
});

app.listen({ port: 4003 });
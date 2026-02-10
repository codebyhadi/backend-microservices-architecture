const Fastify = require("fastify");
const db = require("./db");
const routes = require("./routes");

const app = Fastify();
app.register(routes, db);

app.listen({ port: 4002 });
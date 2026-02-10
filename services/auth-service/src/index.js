const Fastify = require("fastify");
const jwt = require("jsonwebtoken");

const app = Fastify();

app.post("/login", async (req) => {
  const { email } = req.body;

  const token = jwt.sign(
    { email, role: "user" },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );

  return { token };
});

app.listen({ port: 4001 });
const jwt = require("jsonwebtoken");

module.exports = async (req, reply) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return reply.code(401).send({ error: "No token" });

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    reply.code(401).send({ error: "Invalid token" });
  }
};
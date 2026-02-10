module.exports = async (app, db) => {
  app.get("/me", async (req) => {
    const { rows } = await db.query(
      "SELECT email FROM users WHERE email=$1",
      [req.headers["x-user-email"]]
    );
    return rows[0];
  });
};
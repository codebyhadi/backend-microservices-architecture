const { Pool } = require("pg");

module.exports = new Pool({
  user: "app",
  password: "app",
  database: "users",
  host: "localhost",
  port: 5432
});
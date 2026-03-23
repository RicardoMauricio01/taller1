const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "chatdb",
  password: "root", // cambia por tu contraseña
  port: 5432,
});

module.exports = pool;
const { Pool } = require("pg");

// en password usar el password que usas para tu base de datos postgres
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "chatdb",
  password: "root", 
  port: 5432,
});

module.exports = pool;
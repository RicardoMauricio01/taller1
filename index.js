const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// rutas
app.use("/api/auth", require("./routes/auth"));

// prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

// levantar servidor
app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});

// test BD
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error BD:", err);
  } else {
    console.log("BD conectada:", res.rows);
  }
});
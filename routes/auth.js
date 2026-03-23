const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    if (!nombre || !email || !password) {
      return res.status(400).json({ error: "Faltan datos" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO usuarios (nombre, email, password) VALUES ($1, $2, $3)",
      [nombre, email, hashedPassword]
    );

    res.json({ mensaje: "Usuario registrado" });

  } catch (error) {
    if (error.code === "23505") {
      return res.status(400).json({ error: "Email ya existe" });
    }
    res.status(500).json({ error: "Error servidor" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query(
      "SELECT * FROM usuarios WHERE email = $1",
      [email]
    );

    if (user.rows.length === 0) {
      return res.status(400).json({ error: "Usuario no existe" });
    }

    const valid = await bcrypt.compare(password, user.rows[0].password);

    if (!valid) {
      return res.status(400).json({ error: "Contraseña incorrecta" });
    }

    const token = jwt.sign(
      { id: user.rows[0].id },
      "secreto",
      { expiresIn: "1h" }
    );

    res.json({ token });

  } catch {
    res.status(500).json({ error: "Error servidor" });
  }
});

// PERFIL (protegido)
const authMiddleware = require("../middleware/auth");

router.get("/perfil", authMiddleware, async (req, res) => {
  const user = await pool.query(
    "SELECT id, nombre, email FROM usuarios WHERE id = $1",
    [req.user.id]
  );

  res.json(user.rows[0]);
});

module.exports = router;
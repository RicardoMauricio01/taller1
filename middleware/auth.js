const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Acceso denegado" });
  }

  try {
    const verified = jwt.verify(token, "secreto");
    req.user = verified;
    next();
  } catch {
    res.status(400).json({ error: "Token inválido" });
  }
};
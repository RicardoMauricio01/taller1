import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const authHeader = req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Acceso denegado" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const verified = jwt.verify(token, "secreto");
        req.user = verified;
        next();
    } catch {
        return res.status(400).json({ error: "Token inválido" });
    }
};

export default authMiddleware;

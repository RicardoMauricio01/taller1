import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// rutas
app.use("/api/auth", authRoutes);

// ruta de prueba
app.get("/", (req, res) => {
    res.send("Servidor corriendo perfectamente yuju");
});

export default app;

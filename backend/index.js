import app from "./src/app.js";
import pool from "./src/db.js";

const PORT = 3000;

// levantar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// test BD
pool.query("SELECT NOW()", (err, res) => {
    if (err) {
        console.error("Error BD:", err);
    } else {
        console.log("BD conectada:", res.rows);
    }
});

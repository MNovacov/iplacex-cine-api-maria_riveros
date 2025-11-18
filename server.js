import express from "express";
import cors from "cors";
import peliculaRoutes from "./src/pelicula/routes.js";
import actorRoutes from "./src/actor/routes.js";
import { connectDB } from "./src/common/db.js";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenido al cine Iplacex");
});

app.use("/api", peliculaRoutes);
app.use("/api", actorRoutes);

const start = async () => {
  const db = await connectDB();
  if (!db) return;

  app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  });
};

start();

import { Router } from "express";
import {
  getPeliculas,
  getPeliculaById,
  createPelicula,
  updatePelicula,
  deletePelicula
} from "./controller.js";

const router = Router();

router.post("/pelicula", createPelicula);
router.get("/peliculas", getPeliculas);
router.get("/pelicula/:id", getPeliculaById);
router.put("/pelicula/:id", updatePelicula);
router.delete("/pelicula/:id", deletePelicula);

export default router;

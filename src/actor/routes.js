import { Router } from "express";
import {
  getActores,
  getActorById,
  getActoresByPelicula,
  createActor,
  updateActor,
  deleteActor
} from "./controller.js";

const router = Router();

router.post("/actor", createActor);
router.get("/actores", getActores);
router.get("/actor/:id", getActorById);
router.get("/actor/pelicula/:pelicula", getActoresByPelicula);
router.put("/actor/:id", updateActor);
router.delete("/actor/:id", deleteActor);

export default router;

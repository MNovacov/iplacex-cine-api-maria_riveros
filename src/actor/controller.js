import { connectDB } from "../common/db.js";
import { ActorSchema } from "./schema.js";
import { ObjectId } from "mongodb";

const ACTORES = "actores";
const PELICULAS = "peliculas";

export async function getActores(req, res) {
  const db = await connectDB();
  const actores = await db.collection(ACTORES).find().toArray();
  res.json(actores);
}

export async function getActorById(req, res) {
  const db = await connectDB();
  const id = new ObjectId(req.params.id);
  const actor = await db.collection(ACTORES).findOne({ _id: id });
  res.json(actor);
}

export async function getActoresByPelicula(req, res) {
  const db = await connectDB();
  const nombrePelicula = req.params.pelicula;
  const actores = await db.collection(ACTORES).find({ idPelicula: nombrePelicula }).toArray();
  res.json(actores);
}

export async function createActor(req, res) {
  const db = await connectDB();
  const data = ActorSchema(req.body);

  const existe = await db.collection(PELICULAS).findOne({ nombre: data.idPelicula });

  if (!existe) {
    return res.json({ error: "La película indicada no existe" });
  }

  const result = await db.collection(ACTORES).insertOne(data);
  res.json(result);
}

export async function updateActor(req, res) {
  const db = await connectDB();
  const id = new ObjectId(req.params.id);
  const data = ActorSchema(req.body);

  const result = await db.collection(ACTORES).updateOne(
    { _id: id },
    { $set: data }
  );

  res.json(result);
}

export async function deleteActor(req, res) {
  const db = await connectDB();
  const id = new ObjectId(req.params.id);
  const result = await db.collection(ACTORES).deleteOne({ _id: id });
  res.json(result);
}

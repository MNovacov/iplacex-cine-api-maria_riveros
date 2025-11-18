import { connectDB } from "../common/db.js";
import { PeliculaSchema } from "./schema.js";
import { ObjectId } from "mongodb";

const COLLECTION = "peliculas";

export async function getPeliculas(req, res) {
  const db = await connectDB();
  const peliculas = await db.collection(COLLECTION).find().toArray();
  res.json(peliculas);
}

export async function getPeliculaById(req, res) {
  const db = await connectDB();
  const id = new ObjectId(req.params.id);
  const pelicula = await db.collection(COLLECTION).findOne({ _id: id });
  res.json(pelicula);
}

export async function createPelicula(req, res) {
  const db = await connectDB();
  const nueva = PeliculaSchema(req.body);
  const result = await db.collection(COLLECTION).insertOne(nueva);
  res.json(result);
}

export async function updatePelicula(req, res) {
  const db = await connectDB();
  const id = new ObjectId(req.params.id);
  const data = PeliculaSchema(req.body);
  const result = await db.collection(COLLECTION).updateOne(
    { _id: id },
    { $set: data }
  );
  res.json(result);
}

export async function deletePelicula(req, res) {
  const db = await connectDB();
  const id = new ObjectId(req.params.id);
  const result = await db.collection(COLLECTION).deleteOne({ _id: id });
  res.json(result);
}

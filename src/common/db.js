import { MongoClient } from "mongodb";

const uri = "mongodb+srv://ev3_express:ctS4lsaDYDZaoSoS@cluster-express.svjnw2f.mongodb.net/?appName=cluster-express";

let client;
let db;

export async function connectDB() {
  try {
    if (!client) {
      client = new MongoClient(uri);

      await client.connect();
      console.log("Conexión exitosa al clúster eva-u3-express");

      db = client.db("cine-db");
    }

    return db;

  } catch (error) {
    console.error("Error al conectar a MongoDB Atlas:", error);
  }
}

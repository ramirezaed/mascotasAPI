import { mascotaController } from "./controller";
import express from "express";

const mascotaRoutes = express.Router();
const {
  newMascota,
  fetchByName,
  fetchEncontrados,
  fetchPerdida,
  fetchById,
  deleteMascota,
  fetchMascotas,
} = mascotaController;

mascotaRoutes.post("/new", newMascota);
mascotaRoutes.get("/fetchByName", fetchByName);
mascotaRoutes.get("/encontradas", fetchEncontrados);
mascotaRoutes.get("/fetchMascotas", fetchMascotas);
mascotaRoutes.get("/perdidas", fetchPerdida);
mascotaRoutes.get("/fetchById", fetchById);
mascotaRoutes.delete("/delete", deleteMascota);

export default mascotaRoutes;

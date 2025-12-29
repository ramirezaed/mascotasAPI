import { mascotaController } from "./controller";
import express from "express";
import { upload } from "../../middleware/upload";

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

mascotaRoutes.post("/new", upload.single("imagen"), newMascota);
mascotaRoutes.get("/fetchByName", fetchByName);
mascotaRoutes.get("/encontradas", fetchEncontrados);
mascotaRoutes.get("/fetchMascotas", fetchMascotas);
mascotaRoutes.get("/perdidas", fetchPerdida);
mascotaRoutes.get("/fetchById", fetchById);
mascotaRoutes.delete("/delete", deleteMascota);

export default mascotaRoutes;

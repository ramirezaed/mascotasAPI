import express from "express";
import { refugiosController } from "./controller";

const refugiosRoutes = express.Router();
const { newRefugios, fetchById, fetchRefugios } = refugiosController;

refugiosRoutes.post("/new", newRefugios);
refugiosRoutes.get("/fetchById/:id", fetchById);
refugiosRoutes.get("/fetchRefugios", fetchRefugios);

export default refugiosRoutes;

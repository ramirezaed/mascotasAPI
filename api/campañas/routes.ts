import { campañaController } from "./controller";
import express from "express";

const campanaRoutes = express.Router();
const { newCampaña, fetchCampaña, fetchById, fetchCampañaByName } =
  campañaController;

campanaRoutes.post("/new", newCampaña);
campanaRoutes.get("/fetchCampana", fetchCampaña);
campanaRoutes.get("/fetchCampanaByName", fetchCampañaByName);
campanaRoutes.get("/fetchById", fetchById);

export default campanaRoutes;

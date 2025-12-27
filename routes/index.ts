import express, { Router } from "express";
import mascotaRoutes from "../api/mascotas/routes";
import campanaRoutes from "../api/campañas/routes";
import refugiosRoutes from "../api/refugios/routes";
const routes = express.Router();

routes.use("/mascotas", mascotaRoutes);
routes.use("/campana", campanaRoutes);
routes.use("/refugios", refugiosRoutes);

export default routes;

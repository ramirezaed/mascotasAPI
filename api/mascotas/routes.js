"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
const upload_1 = require("../../middleware/upload");
const express_1 = __importDefault(require("express"));
const mascotaRoutes = express_1.default.Router();
const { newMascota, fetchByName, fetchEncontrados, fetchPerdida, fetchById, deleteMascota, fetchMascotas, } = controller_1.mascotaController;
mascotaRoutes.post("/new", upload_1.upload.single("imagen"), newMascota);
mascotaRoutes.get("/fetchByName", fetchByName);
mascotaRoutes.get("/encontradas", fetchEncontrados);
mascotaRoutes.get("/fetchMascotas", fetchMascotas);
mascotaRoutes.get("/perdidas", fetchPerdida);
mascotaRoutes.get("/fetchById", fetchById);
mascotaRoutes.delete("/delete", deleteMascota);
exports.default = mascotaRoutes;

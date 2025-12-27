"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
const express_1 = __importDefault(require("express"));
const campanaRoutes = express_1.default.Router();
const { newCampaña, fetchCampaña, fetchById, fetchCampañaByName } = controller_1.campañaController;
campanaRoutes.post("/new", newCampaña);
campanaRoutes.get("/fetchCampana", fetchCampaña);
campanaRoutes.get("/fetchCampanaByName", fetchCampañaByName);
campanaRoutes.get("/fetchById", fetchById);
exports.default = campanaRoutes;

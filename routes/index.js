"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("../api/mascotas/routes"));
const routes_2 = __importDefault(require("../api/campa\u00F1as/routes"));
const routes_3 = __importDefault(require("../api/refugios/routes"));
const routes = express_1.default.Router();
routes.use("/mascotas", routes_1.default);
routes.use("/campana", routes_2.default);
routes.use("/refugios", routes_3.default);
exports.default = routes;

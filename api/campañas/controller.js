"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.campañaController = void 0;
const service_1 = require("./service");
const { newCampaña, fetchById, fetchCampañaByName, fetchCampana } = service_1.campañaService;
class CampañaController {
    newCampaña(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body; // acá está el JSON completo
                if (data.fecha)
                    data.fecha = new Date(data.fecha);
                const result = yield newCampaña(data);
                return res.status(201).json(result);
            }
            catch (error) {
                return res.status(400).json({ error: error.message });
            }
        });
    }
    fetchCampañaByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const result = yield fetchCampañaByName(data);
                return res.status(200).json(result);
            }
            catch (error) {
                return res.status(400).json({ error: error.message });
            }
        });
    }
    fetchById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const result = yield fetchById(id);
                return res.status(200).json(result);
            }
            catch (error) {
                return res.status(400).json({ error: error.message });
            }
        });
    }
    fetchCampaña(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield fetchCampana();
                return res.status(200).json(result);
            }
            catch (error) {
                return res.status(400).json({ error: error.message });
            }
        });
    }
}
exports.campañaController = new CampañaController();

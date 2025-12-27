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
exports.mascotaController = void 0;
const service_1 = require("./service");
const { newMascota, fetchByName, fetchEncontrados, fetchPerdida, fetchById, deleteMascota, fetchMascotas, } = service_1.mascotasServices;
class MascotaController {
    newMascota(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // upload.single("imagen");
            try {
                const datos = req.body;
                if (req.file)
                    datos.imagen = req.file.filename;
                const result = yield newMascota(datos);
                return res.status(201).json(result);
            }
            catch (error) {
                return res.status(400).json({ error: error.message });
            }
        });
    }
    fetchByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nombre = req.body;
                const result = yield fetchByName(nombre);
                return res.status(200).json(result);
            }
            catch (error) {
                if (error.message === "falta el nombre") {
                    return res.status(400).json({ error: error.message });
                }
                return res.status(404).json({ error: error.message });
            }
        });
    }
    fetchEncontrados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield fetchEncontrados();
                return res.status(200).json(result);
            }
            catch (error) {
                return res.status(400).json({ error: error.message });
            }
        });
    }
    fetchPerdida(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield fetchPerdida();
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
    deleteMascota(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const result = yield deleteMascota(id);
                return res.status(200).json(result);
            }
            catch (error) {
                return res.status(400).json({ error: error.message });
            }
        });
    }
    fetchMascotas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield fetchMascotas();
                return res.status(200).json(result);
            }
            catch (error) {
                return res.status(400).json({ error: error.message });
            }
        });
    }
}
exports.mascotaController = new MascotaController();

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mascotasDao = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
class MascotasDao {
    newMascota(mascota) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield prisma_1.default.mascota.create({
                    data: mascota,
                });
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    fetchByName(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield prisma_1.default.mascota.findMany({
                    where: {
                        nombre: {
                            // de esta forma no distingue de minusculas o mayusculas
                            contains: nombre,
                            mode: "insensitive",
                        },
                    },
                });
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    fetchEncontrados() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield prisma_1.default.mascota.findMany({
                    where: {
                        estado: "ENCONTRADA",
                    },
                });
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    fetchPerdida() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield prisma_1.default.mascota.findMany({
                    where: {
                        estado: "PERDIDA",
                    },
                });
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    fetchById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield prisma_1.default.mascota.findUnique({
                    where: { id: id },
                });
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    deleteMascota(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield prisma_1.default.mascota.delete({
                    where: { id: id },
                });
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    fetchMascotas() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield prisma_1.default.mascota.findMany();
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.mascotasDao = new MascotasDao();

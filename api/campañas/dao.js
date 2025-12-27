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
exports.campañaDao = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
class CampañaDao {
    newCampaña(campaña) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield prisma_1.default.campaña.create({
                    data: campaña,
                });
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    fetchCampañaByName(nombre) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield prisma_1.default.campaña.findMany({
                    where: {
                        titulo: {
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
    fetchById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield prisma_1.default.campaña.findUnique({ where: { id: id } });
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    fetchCampana() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield prisma_1.default.campaña.findMany();
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.campañaDao = new CampañaDao();

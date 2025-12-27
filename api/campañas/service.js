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
exports.campañaService = void 0;
const dao_1 = require("./dao");
const { newCampaña, fetchCampana, fetchById, fetchCampañaByName } = dao_1.campañaDao;
function validarTelefono(telefono) {
    const telefonoLimpio = telefono.trim();
    const regex = /^\+?\d{8,15}$/;
    return regex.test(telefonoLimpio);
}
function validarEmail(email) {
    const emailLimpio = email.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailLimpio);
}
class CampañaService {
    newCampaña(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield newCampaña(data);
                // if (!data.contactoTelefono || validarTelefono(data.contactoTelefono)) {
                //   throw new Error("formato de numero incorreccto");
                // }
                // if (!data.contactoCorreo || validarEmail(data.contactoCorreo)) {
                //   throw new Error("formato de correo incorrecto");
                // }
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
                const result = yield fetchCampañaByName(nombre);
                // if (result.length === 0) {
                //   return { message: "no hay campaña con ese titulo" };
                // }
                return result || [];
                // return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    fetchCampana() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield fetchCampana();
                return result || [];
                // return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    fetchById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield fetchById(id);
                if (!result) {
                    return { message: "no hay campaña con ese id" };
                }
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.campañaService = new CampañaService();

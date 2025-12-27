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
exports.mascotasServices = void 0;
const dao_1 = require("./dao");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const { newMascota, fetchByName, fetchEncontrados, fetchPerdida, fetchById, deleteMascota, fetchMascotas, } = dao_1.mascotasDao;
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
class MascotasServices {
    // async newMascota(data: Imascotas) {
    //   try {
    //     const result = await newMascota(data);
    //     // if (!data.contactoTelefono || validarTelefono(data.contactoTelefono)) {
    //     //   throw new Error("formato de numero incorreccto");
    //     // }
    //     // if (!data.contactoCorreo || validarEmail(data.contactoCorreo)) {
    //     //   throw new Error("formato de correo incorrecto");
    //     // }
    //     return result;
    //   } catch (error) {
    //     throw new Error((error as Error).message);
    //   }
    // }
    newMascota(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (data.imagen && typeof data.imagen !== "string") {
                    // Solo guardamos la ruta relativa en la DB
                    data.imagen = `/uploads/${data.imagen}`;
                }
                const result = yield newMascota(data);
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
                const result = yield fetchByName(nombre);
                if (!nombre) {
                    throw new Error("falta el nombre");
                }
                if (result.length === 0) {
                    return { message: "no hay resultados" };
                }
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
                const result = yield fetchEncontrados();
                return result || [];
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    fetchPerdida() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield fetchPerdida();
                return result || [];
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
                    return { message: "no encontrado" };
                }
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
                const result = yield deleteMascota(id);
                if (!result) {
                    return { message: "no encontrado" };
                }
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
                const result = yield fetchMascotas();
                if (result.length === 0) {
                    return { message: "no hay mascotas registradas" };
                }
                return result;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
    verificarRecaptcha(tokenC) {
        return __awaiter(this, void 0, void 0, function* () {
            const secret = process.env.RECAPTCHA_SECRET_KEY_V2;
            const response = yield fetch(`https://www.google.com/recaptcha/api/siteverify`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: `secret=${secret}&response=${tokenC}`,
            });
            const data = yield response.json();
            return data;
        });
    }
}
exports.mascotasServices = new MascotasServices();

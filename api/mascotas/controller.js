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
exports.mascotaController = void 0;
const service_1 = require("./service");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
const { newMascota, fetchByName, fetchEncontrados, fetchPerdida, fetchById, deleteMascota, fetchMascotas, } = service_1.mascotasServices;
class MascotaController {
    newMascota(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // upload.single("imagen");
            try {
                const datos = req.body;
                const result = yield newMascota(datos);
                return res.status(201).json(result);
            }
            catch (error) {
                return res.status(400).json({ error: error.message });
            }
        });
    }
    // controller.ts
    // newMascota = [
    //   upload.single("imagen"), // Multer recibe el archivo
    //   async (req: Request, res: Response) => {
    //     try {
    //       // 🔹 Log para verificar Multer
    //       console.log("Archivo recibido:", req.file);
    //       const {
    //         nombre,
    //         raza,
    //         tipo,
    //         descripcion,
    //         estado,
    //         contactoNombre,
    //         contactoCorreo,
    //         contactoTelefono,
    //       } = req.body;
    //       let imagenPath: string | undefined;
    //       // 🔹 Subida al bucket si hay archivo
    //       if (req.file) {
    //         const fileExt = req.file.originalname.split(".").pop();
    //         const fileName = `imagen-${Date.now()}.${fileExt}`;
    //         const { data, error } = await supabase.storage
    //           .from("mascotas") // nombre de tu bucket
    //           .upload(fileName, req.file.buffer, {
    //             cacheControl: "3600",
    //             upsert: false,
    //             contentType: req.file.mimetype,
    //           });
    //         // 🔹 Log del resultado de la subida
    //         console.log("Resultado upload:", data, error);
    //         if (error) throw error;
    //         imagenPath = data.path; // Guardamos la ruta para la DB
    //       }
    //       // 🔹 Guardar en DB
    //       const nueva = await newMascota({
    //         nombre,
    //         raza,
    //         tipo,
    //         descripcion,
    //         estado,
    //         contactoNombre,
    //         contactoCorreo,
    //         contactoTelefono,
    //         imagen: imagenPath, // ruta que subimos al bucket
    //       });
    //       return res.status(201).json(nueva);
    //     } catch (error: any) {
    //       console.error("Error creando mascota:", error);
    //       return res.status(400).json({ error: error.message });
    //     }
    //   },
    // ];
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

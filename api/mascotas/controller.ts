import { mascotasServices } from "./service";
import { Request, Response } from "express";
import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });

const {
  newMascota,
  fetchByName,
  fetchEncontrados,
  fetchPerdida,
  fetchById,
  deleteMascota,
  fetchMascotas,
} = mascotasServices;

class MascotaController {
  async newMascota(req: Request, res: Response) {
    // upload.single("imagen");
    try {
      const datos = req.body;
      const result = await newMascota(datos);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
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

  async fetchByName(req: Request, res: Response) {
    try {
      const nombre = req.body;
      const result = await fetchByName(nombre);
      return res.status(200).json(result);
    } catch (error) {
      if ((error as Error).message === "falta el nombre") {
        return res.status(400).json({ error: (error as Error).message });
      }
      return res.status(404).json({ error: (error as Error).message });
    }
  }
  async fetchEncontrados(req: Request, res: Response) {
    try {
      const result = await fetchEncontrados();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
  async fetchPerdida(req: Request, res: Response) {
    try {
      const result = await fetchPerdida();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
  async fetchById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const result = await fetchById(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
  async deleteMascota(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const result = await deleteMascota(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
  async fetchMascotas(req: Request, res: Response) {
    try {
      const result = await fetchMascotas();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
}

export const mascotaController = new MascotaController();

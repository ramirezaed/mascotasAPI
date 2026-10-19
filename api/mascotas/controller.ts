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

import { Request, Response } from "express";
import { campañaService } from "./service";

const { newCampaña, fetchById, fetchCampañaByName, fetchCampana } =
  campañaService;

class CampañaController {
  async newCampaña(req: Request, res: Response) {
    try {
      const data = req.body; // acá está el JSON completo
      if (data.fecha) data.fecha = new Date(data.fecha);
      const result = await newCampaña(data);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
  async fetchCampañaByName(req: Request, res: Response) {
    try {
      const data = req.body;
      const result = await fetchCampañaByName(data);
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

  async fetchCampaña(req: Request, res: Response) {
    try {
      const result = await fetchCampana();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
}

export const campañaController = new CampañaController();

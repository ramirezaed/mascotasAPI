import { Request, Response } from "express";
import { refugiosServices } from "./service";

const { newRefugios, fetchById, fetchRefugios } = refugiosServices;

class RefugiosController {
  async newRefugios(req: Request, res: Response) {
    try {
      const data = req.body;
      const result = await newRefugios(data);
      return res.status(201).json(result);
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
  async fetchRefugios(req: Request, res: Response) {
    try {
      const result = await fetchRefugios();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
}

export const refugiosController = new RefugiosController();

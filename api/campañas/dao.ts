import prisma from "../../utils/prisma";
import { Icampaña } from "./types";

class CampañaDao {
  async newCampaña(campaña: Icampaña) {
    try {
      const result = await prisma.campaña.create({
        data: campaña,
      });
      return result;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async fetchCampañaByName(nombre: string) {
    try {
      const result = await prisma.campaña.findMany({
        where: {
          titulo: {
            // de esta forma no distingue de minusculas o mayusculas
            contains: nombre,
            mode: "insensitive",
          },
        },
      });
      return result;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async fetchById(id: number) {
    try {
      const result = await prisma.campaña.findUnique({ where: { id: id } });
      return result;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async fetchCampana() {
    try {
      const result = await prisma.campaña.findMany();
      return result;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}

export const campañaDao = new CampañaDao();

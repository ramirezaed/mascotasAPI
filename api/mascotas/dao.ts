import prisma from "../../utils/prisma";
import { Imascotas } from "./types";

class MascotasDao {
  async newMascota(mascota: Imascotas) {
    try {
      const result = await prisma.mascota.create({
        data: mascota,
      });
      return result;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async fetchByName(nombre: string) {
    try {
      const result = await prisma.mascota.findMany({
        where: {
          nombre: {
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
  async fetchEncontrados() {
    try {
      const result = await prisma.mascota.findMany({
        where: {
          estado: "ENCONTRADA",
        },
      });
      return result;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async fetchPerdida() {
    try {
      const result = await prisma.mascota.findMany({
        where: {
          estado: "PERDIDA",
        },
      });
      return result;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async fetchById(id: number) {
    try {
      const result = await prisma.mascota.findUnique({
        where: { id: id },
      });
      return result;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async deleteMascota(id: number) {
    try {
      const result = await prisma.mascota.delete({
        where: { id: id },
      });
      return result;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async fetchMascotas() {
    try {
      const result = await prisma.mascota.findMany();
      return result;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}

export const mascotasDao = new MascotasDao();

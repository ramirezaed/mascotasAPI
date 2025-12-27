import prisma from "../../utils/prisma";
import { Irefugios } from "./types";

class RefugiosDao {
  async newRefugio(datos: Irefugios) {
    try {
      const result = await prisma.alojamiento.create({ data: datos });
      return result;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async fetchById(id: number) {
    try {
      const result = await prisma.alojamiento.findUnique({ where: { id: id } });
      return result;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async fetchRefugios() {
    try {
      const result = await prisma.alojamiento.findMany();
      return result;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}

export const refugiosDao = new RefugiosDao();

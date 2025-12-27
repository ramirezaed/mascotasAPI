import { Icampaña } from "./types";
import { campañaDao } from "./dao";

const { newCampaña, fetchCampana, fetchById, fetchCampañaByName } = campañaDao;

function validarTelefono(telefono: string): boolean {
  const telefonoLimpio = telefono.trim();
  const regex = /^\+?\d{8,15}$/;
  return regex.test(telefonoLimpio);
}
function validarEmail(email: string): boolean {
  const emailLimpio = email.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(emailLimpio);
}

class CampañaService {
  async newCampaña(data: Icampaña) {
    try {
      const result = await newCampaña(data);
      // if (!data.contactoTelefono || validarTelefono(data.contactoTelefono)) {
      //   throw new Error("formato de numero incorreccto");
      // }
      // if (!data.contactoCorreo || validarEmail(data.contactoCorreo)) {
      //   throw new Error("formato de correo incorrecto");
      // }
      return result;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async fetchCampañaByName(nombre: string) {
    try {
      const result = await fetchCampañaByName(nombre);
      // if (result.length === 0) {
      //   return { message: "no hay campaña con ese titulo" };
      // }
      return result || [];
      // return result;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async fetchCampana() {
    try {
      const result = await fetchCampana();
      return result || [];
      // return result;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async fetchById(id: number) {
    try {
      const result = await fetchById(id);
      if (!result) {
        return { message: "no hay campaña con ese id" };
      }
      return result;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}

export const campañaService = new CampañaService();

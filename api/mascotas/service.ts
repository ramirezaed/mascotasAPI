import { mascotasDao } from "./dao";
import { Imascotas } from "./types";
import { config } from "dotenv";

config();

const {
  newMascota,
  fetchByName,
  fetchEncontrados,
  fetchPerdida,
  fetchById,
  deleteMascota,
  fetchMascotas,
} = mascotasDao;
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
class MascotasServices {
  async newMascota(data: Imascotas) {
    try {
      return await newMascota(data);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async fetchByName(nombre: string) {
    try {
      const result = await fetchByName(nombre);
      if (!nombre) {
        throw new Error("falta el nombre");
      }
      if (result.length === 0) {
        return { message: "no hay resultados" };
      }
      return result;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async fetchEncontrados() {
    try {
      const result = await fetchEncontrados();
      return result || [];
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async fetchPerdida() {
    try {
      const result = await fetchPerdida();
      return result || [];
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async fetchById(id: number) {
    try {
      const result = await fetchById(id);
      if (!result) {
        return { message: "no encontrado" };
      }
      return result;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async deleteMascota(id: number) {
    try {
      const result = await deleteMascota(id);
      if (!result) {
        return { message: "no encontrado" };
      }
      return result;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async fetchMascotas() {
    try {
      const result = await fetchMascotas();
      if (result.length === 0) {
        return { message: "no hay mascotas registradas" };
      }
      return result;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async verificarRecaptcha(tokenC: string) {
    const secret = process.env.RECAPTCHA_SECRET_KEY_V2;

    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secret}&response=${tokenC}`,
      }
    );

    const data = await response.json();
    return data;
  }
}
export const mascotasServices = new MascotasServices();

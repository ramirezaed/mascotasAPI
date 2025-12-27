import { waitForDebugger } from "inspector";
import { refugiosDao } from "./dao";
import { Irefugios } from "./types";
import { response } from "express";

const { newRefugio, fetchById, fetchRefugios } = refugiosDao;

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

class RefugiosServices {
  async newRefugios(data: Irefugios) {
    try {
      const result = await newRefugio(data);
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
  async fetchById(id: number) {
    try {
      const result = await fetchById(id);

      return result || [];
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  async fetchRefugios() {
    try {
      const result = await fetchRefugios();
      return result || [];
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}

export const refugiosServices = new RefugiosServices();

export enum EstadoMascota {
  PERDIDA = "PERDIDA",
  ENCONTRADA = "ENCONTRADA",
}

export interface Imascotas {
  nombre?: string;
  raza?: string;
  tamaño?: string;
  tipo: string;
  descripcion?: string;
  estado: EstadoMascota;
  usuarioId?: number; // corregido
  contactoNombre?: string;
  contactoCorreo?: string;
  contactoTelefono?: string;
  imagen?: string; // corregido
}

-- CreateEnum
CREATE TYPE "public"."EstadoMascota" AS ENUM ('PERDIDA', 'ENCONTRADA');

-- CreateTable
CREATE TABLE "public"."Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "telefono" TEXT,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Mascota" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT,
    "raza" TEXT,
    "tamaño" TEXT,
    "tipo" TEXT NOT NULL,
    "descripcion" TEXT,
    "estado" "public"."EstadoMascota" NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mascota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Campaña" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT,
    "fecha" TIMESTAMP(3),
    "ubicacion" TEXT,
    "usuarioId" INTEGER NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Campaña_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Alojamiento" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT,
    "ubicacion" TEXT,
    "capacidad" INTEGER,
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "usuarioId" INTEGER NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Alojamiento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_key" ON "public"."Usuario"("correo");

-- AddForeignKey
ALTER TABLE "public"."Mascota" ADD CONSTRAINT "Mascota_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Campaña" ADD CONSTRAINT "Campaña_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Alojamiento" ADD CONSTRAINT "Alojamiento_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

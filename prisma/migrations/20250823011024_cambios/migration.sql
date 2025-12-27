-- DropForeignKey
ALTER TABLE "public"."Alojamiento" DROP CONSTRAINT "Alojamiento_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Campaña" DROP CONSTRAINT "Campaña_usuarioId_fkey";

-- AlterTable
ALTER TABLE "public"."Alojamiento" ADD COLUMN     "contactoCorreo" TEXT,
ADD COLUMN     "contactoNombre" TEXT,
ADD COLUMN     "contactoTelefono" TEXT,
ALTER COLUMN "usuarioId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Campaña" ADD COLUMN     "contactoCorreo" TEXT,
ADD COLUMN     "contactoNombre" TEXT,
ADD COLUMN     "contactoTelefono" TEXT,
ALTER COLUMN "usuarioId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Campaña" ADD CONSTRAINT "Campaña_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Alojamiento" ADD CONSTRAINT "Alojamiento_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

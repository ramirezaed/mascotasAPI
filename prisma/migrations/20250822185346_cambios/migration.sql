-- DropForeignKey
ALTER TABLE "public"."Mascota" DROP CONSTRAINT "Mascota_usuarioId_fkey";

-- AlterTable
ALTER TABLE "public"."Mascota" ADD COLUMN     "contactoCorreo" TEXT,
ADD COLUMN     "contactoNombre" TEXT,
ADD COLUMN     "contactoTelefono" TEXT,
ALTER COLUMN "usuarioId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Mascota" ADD CONSTRAINT "Mascota_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

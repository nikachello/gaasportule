/*
  Warnings:

  - You are about to drop the column `isActive` on the `Collection` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "CollectionStatus" AS ENUM ('ACTIVE', 'COMPLETED', 'CLOSED');

-- AlterTable
ALTER TABLE "Collection" DROP COLUMN "isActive",
ADD COLUMN     "status" "CollectionStatus" NOT NULL DEFAULT 'ACTIVE';

/*
  Warnings:

  - You are about to drop the column `categoriaId` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the `Categoria` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Produto` DROP FOREIGN KEY `Produto_categoriaId_fkey`;

-- DropIndex
DROP INDEX `Produto_categoriaId_fkey` ON `Produto`;

-- AlterTable
ALTER TABLE `Produto` DROP COLUMN `categoriaId`;

-- DropTable
DROP TABLE `Categoria`;

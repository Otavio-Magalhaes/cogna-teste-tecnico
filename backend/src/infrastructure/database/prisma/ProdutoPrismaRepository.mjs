import { PrismaClient } from "@prisma/client"
import { ProdutoRepository } from "../../../domain/repositories/produto.repository.mjs"

export const prisma = new PrismaClient

export class ProdutoPrismaRepository extends ProdutoRepository {
  async create(produtoData) {
    return await prisma.produto.create({
      data: produtoData
    })
  }

  async getAll() {
    return await prisma.produto.findMany({
     orderBy: {
        categoria: { nome: "asc" }
      },
      include: {
        categoria: true
      }
    })
  }

  async getByCategory(categoria) {
    return await prisma.produto.findMany({
      where: { categoria }
    })
  }

  async getByName(nome) {
    return await prisma.produto.findMany({
      wherer: { nome }
    })
  }



}


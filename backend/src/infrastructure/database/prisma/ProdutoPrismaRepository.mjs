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

  async getById(id) {
    return await prisma.produto.findUnique({
      where: { id }
    })
  }
}


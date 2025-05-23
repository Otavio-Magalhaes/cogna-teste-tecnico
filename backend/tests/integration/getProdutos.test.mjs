import { jest, test, expect } from "@jest/globals"
import request from "supertest"


jest.unstable_mockModule("../../src/infrastructure/middlewares/authenticateToken.mjs", () => ({
  authenticateToken: (req, res, next) => {
    req.user = { id: 1, nome: "Usuário mockado" }
    next()
  }
}))


jest.unstable_mockModule( "../../src/infrastructure/database/prisma/ProdutoPrismaRepository.mjs" , () => ({
  ProdutoPrismaRepository: class {
    getAll() {
      return Promise.resolve([
        {
          id: 1,
          nome: "Produto Teste",
          descricao: "Descrição teste",
          categoriaId: 2
        },
        {
          id: 2,
          nome: "Produto Teste2",
          descricao: "Descrição teste",
          categoriaId: 3
        },

      ])
    }
  }
}))

const { default: app } = await import("../../app.mjs")

test("GET /api/produtos retorna 200 e lista de produtos", async () => {
  const response = await request(app)
    .get("/api/produtos")
    .set("Authorization", "Bearer fake-token")

  expect(response.statusCode).toBe(200)
  expect(response.body).toEqual([
    {
      id: 1,
      nome: "Produto Teste",
      descricao: "Descrição teste",
      categoriaId: 2
    }, 
    {
      id: 2,
      nome: "Produto Teste2",
      descricao: "Descrição teste",
      categoriaId: 3
    }
  ])
})

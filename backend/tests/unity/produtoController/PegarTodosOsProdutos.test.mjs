import { pegarTodosOsProdutos } from "../../../src/interfaces/controllers/produtosController.mjs"
import { test, expect, jest } from '@jest/globals'

test("pegarTodosOsProdutos retorna status 200 e produtos", async () => {
  const mockProdutoRepository = {
    getAll: jest.fn().mockResolvedValue([
      {
        id: 1,
        nome: "Produto Teste",
        descricao: " lorem ipsum lorem ipsum lorem ipsum",
        categoriaId: 2
      }
    ])
  }

  const request = {}
  const response = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  }

  const controller = pegarTodosOsProdutos(mockProdutoRepository)
  await controller(request, response)

  expect(response.status).toHaveBeenCalledWith(200)
  expect(response.json).toHaveBeenCalledWith([
    {
      id: 1,
      nome: "Produto Teste",
      descricao: " lorem ipsum lorem ipsum lorem ipsum",
      categoriaId: 2
    }
  ])
})

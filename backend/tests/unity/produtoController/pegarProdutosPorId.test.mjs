import { pegarProdutoPorId } from "../../../src/interfaces/controllers/produtosController.mjs";
import { test, expect, jest } from '@jest/globals';

test("pegarProdutoPorId deve retornar status 200 e o produto com suas descricoes", async () => {
  const mockProduto = {
    id: 2,
    nome: "Produto Teste Teste",
    descricao: " lorem ipsum lorem ipsum lorem ipsum",
    categoriaId: 3
  };

  const mockProdutoRepository = {
    getById: jest.fn().mockResolvedValue(mockProduto)
  };

  const request = {
    params: {
      id: "2"
    }
  };

  const response = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  };

  const controller = pegarProdutoPorId(mockProdutoRepository);
  await controller(request, response);

  expect(mockProdutoRepository.getById).toHaveBeenCalledWith("2");
  expect(response.status).toHaveBeenCalledWith(200);
  expect(response.json).toHaveBeenCalledWith(mockProduto);
});

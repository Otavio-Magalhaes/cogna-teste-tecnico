import { Produto } from "../entities/produto.entity.mjs";

export const criarProduto = async(produtoRepository,produtoData) =>{
  const produto = new Produto({
   nome: produtoData.nome,
   preco: produtoData.preco,
   descricao: produtoData.descricao,
   imagemUrl: produtoData.imagemUrl 
  })
  
  return await produtoRepository.create(produto.toObject())
}
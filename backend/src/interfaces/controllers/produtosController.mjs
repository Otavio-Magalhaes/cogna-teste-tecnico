import { ProdutoPrismaRepository } from "../../infrastructure/database/prisma/ProdutoPrismaRepository.mjs"

const produtoRepository = new ProdutoPrismaRepository

export const PegarTodosOsProdutos = async(request, response) =>{
  try{
    const produtos = await produtoRepository.getAll()
    if (!produtos || produtos.length === 0) {
      return response.status(404).json({ message: "Nenhum produto cadastrado." });
    }
    response.status(200).json(produtos)
  }catch(err){
    console.error(err)
    response.status(500).json({msg:"erro interno do servidor."})    
  }
}

export const PegarProdutoPorId = async(request, response)=>{
  const {id} = request.params
  console.log(id)
  try{
     const produto = await produtoRepository.getById(id)
     if(!produto){
      response.status(404).json({msg: "Produto Não Encontrado."})
     }
     response.status(200).json(produto)
  }catch(err){
    console.error(err)
    response.status(500).json({msg:"Erro interno do servidor"})
  }
}
import { ProdutoPrismaRepository } from "../../infrastructure/database/prisma/ProdutoPrismaRepository.mjs"

const produtoRepository = new ProdutoPrismaRepository

export const PegarTodosOsProdutos = async(request, response) =>{
  try{
    const produtos = await produtoRepository.getAll()
    if (!produtos || produtos.length === 0) {
    return response.status(404).json({ message: "Nenhum produto cadastrado." });
}
  }catch(err){
    console.error(err)
    response.status(500).json({msg:"erro interno do servidor."})    
  }
}
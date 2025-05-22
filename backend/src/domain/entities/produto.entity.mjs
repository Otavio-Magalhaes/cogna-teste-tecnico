export class Produto{
  constructor({nome, descricao,preco,categoriaId,imagemUrl}){
    this.nome = nome
    this.descricao = descricao || ""
    this.preco = preco
    this.categoriaId = categoriaId
    this.imagemUrl = imagemUrl || ""
  }


  validate(){
    if(!this.nome || !this.preco || this.categoria){
      throw new Error("Produto Precisa ter Nome, Preço e Categoria")
    }
  }


  toObject(){
    return({
      id:this.id,
      nome: this.nome,
      descricao: this.descricao,
      preco: this.preco,
      categoriaId: this.categoriaId,
      imagem: this.imagemUrl
    })
  }

}


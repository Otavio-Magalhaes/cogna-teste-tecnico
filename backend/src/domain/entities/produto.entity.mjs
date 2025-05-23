export class Produto{
  constructor({nome, descricao,preco,imagemUrl}){
    this.nome = nome
    this.descricao = descricao || ""
    this.preco = preco
    this.imagemUrl = imagemUrl || ""
  }


  validate(){
    if(!this.nome || !this.preco ){
      throw new Error("Produto Precisa ter Nome e Preço")
    }
  }


  toObject(){
    return({
      id:this.id,
      nome: this.nome,
      descricao: this.descricao,
      preco: this.preco,
      imagemUrl: this.imagemUrl
    })
  }

}


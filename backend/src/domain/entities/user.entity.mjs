export class User{
  constructor({email, password, name}){
    this.email = email
    this.password = password
    this.name = name
  }


  validate(){
    if(!this.name || !this.email || this.password){
      throw new Error("Produto Precisa ter Nome, email e senha")
    }
  }


  toObject(){
    return({
      email: this.email,
      password: this.password,
      name: this.name
    })
  }
}
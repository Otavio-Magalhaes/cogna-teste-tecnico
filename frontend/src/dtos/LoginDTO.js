export class LoginDTO {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  toJson() {
    return JSON.stringify({
      email: this.email,
      password: this.senha,
    });
  }
}

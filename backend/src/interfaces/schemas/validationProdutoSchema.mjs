export const validateProduto = {
  nome: {
    isString: {
      errorMessage: "O campo Nome precisa ser texto.",
    },
    notEmpty: {
      errorMessage: "O campo Nome precisa ser preenchido.",
    },
  },

  descricao: {
    optional: true,
    isString: {
      errorMessage: "A descrição deve ser um texto.",
    },
    isLength: {
    options: { max: 1000 },
    errorMessage: "A descrição deve ter no máximo 1000 caracteres.",
  },
  },

  preco: {
    notEmpty: {
      errorMessage: "O campo Preço precisa ser preenchido.",
    },
    isFloat: {
      options: { gt: 0 },
      errorMessage: "O campo Preço deve ser um número maior que zero.",
    },
  },
  imagemUrl: {
    optional: true,
  },
};

export async function getProdutos(token) {
  const res = await fetch('http://localhost:3000/api/produtos', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error('Erro ao buscar produtos');
  }

  return res.json();
}

export async function criarProduto(produto, token) {
  console.log("fetch envio" + JSON.stringify(produto))

  const response = await fetch(`http://localhost:3000/api/produtos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(produto),
  });

  if (!response.ok) {
    throw new Error('Erro ao criar produto');
  }

  return response.json(); 
}